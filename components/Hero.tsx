"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MapPin, Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import AnimeGodLoading from './animations/AnimeGodLoading';
import NorthIndianChart from './charts/NorthIndianChart';
import SouthIndianChart from './charts/SouthIndianChart';
import PlanetaryTable from './tables/PlanetaryTable';
import AspectsTable from './tables/AspectsTable';
import HousesTable from './tables/HousesTable';

export default function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [kundliData, setKundliData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    gender: 'male',
    dob: '',
    tob: '',
    city: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Mocking the location data that would normally come from Google Places API
      const payload = {
        ...formData,
        location: {
          city: formData.city || 'New Delhi',
          lat: 28.6139,
          lon: 77.2090,
          timezone: 5.5
        }
      };

      const res = await fetch('/api/kundli', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (res.ok && data.status === 'success') {
        setKundliData(data.data);
        setShowResult(true);
        setError(null);
      } else {
        setError(data.error || "Failed to generate chart. Please try again.");
      }
    } catch (error) {
      console.error("Failed to generate Kundli", error);
      setError("Network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-space-dark text-white p-4">
      {/* Cosmic Background Placeholder */}
      <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-[#0B0E14] to-[#0B0E14]">
        {/* Three.js canvas would go here */}
      </div>

      <div className={`relative z-10 w-full ${showResult ? 'max-w-6xl' : 'max-w-xl'}`}>
        <AnimatePresence mode="wait">
          {!isSubmitting && !showResult && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="glass-panel p-8 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,229,255,0.1)]"
            >
              <div className="text-center mb-8">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-saffron to-electric-blue mb-4"
                >
                  Unveil Your Cosmic Blueprint
                </motion.h1>
                <p className="text-gray-400 text-sm md:text-base">Enter your birth details to generate a highly precise Kundli.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-electric-blue w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-all"
                  />
                </div>

                {/* Gender & DOB Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white appearance-none focus:outline-none focus:border-electric-blue transition-all"
                    >
                      <option value="male" className="bg-space-dark">Male</option>
                      <option value="female" className="bg-space-dark">Female</option>
                      <option value="other" className="bg-space-dark">Other</option>
                    </select>
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-electric-blue w-5 h-5" />
                    <input
                      type="date"
                      name="dob"
                      required
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-electric-blue transition-all [color-scheme:dark]"
                    />
                  </div>
                </div>

                {/* TOB & City Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-electric-blue w-5 h-5" />
                    <input
                      type="time"
                      name="tob"
                      required
                      value={formData.tob}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-electric-blue transition-all [color-scheme:dark]"
                    />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-electric-blue w-5 h-5" />
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="Birth City"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-electric-blue transition-all"
                    />
                    {/* Note: Google Places Autocomplete would wrap this input */}
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="text-red-400 text-sm text-center bg-red-900/20 py-2 px-4 rounded-lg border border-red-500/30">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255, 153, 51, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full mt-6 bg-gradient-to-r from-saffron to-[#ff7b00] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 overflow-hidden relative group"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                  <Sparkles className="w-5 h-5" />
                  <span>Generate Chart</span>
                </motion.button>
              </form>
            </motion.div>
          )}

          {/* Cinematic Loading State (Anime God Manifestation) */}
          {isSubmitting && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, filter: "blur(20px)" }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center justify-center text-center"
            >
              <AnimeGodLoading />

              <motion.h2
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl font-bold text-electric-blue tracking-widest uppercase"
              >
                Consulting the Cosmos...
              </motion.h2>
              <p className="text-gray-400 mt-2">Aligning planetary positions for {formData.name || 'you'}</p>
            </motion.div>
          )}

          {/* Success Result View */}
          {showResult && !isSubmitting && kundliData && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-6xl mx-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-saffron to-electric-blue">
                    {kundliData.subject?.name || formData.name || 'Your'} Cosmic Blueprint
                  </h2>
                  <p className="text-gray-400 mt-2">
                    Ascendant: <span className="text-white">{kundliData.angles_details?.asc?.sign}</span> |
                    Sun Sign: <span className="text-white">{kundliData.planets?.find((p:any) => p.id === 'sun')?.sign}</span> |
                    Moon Sign: <span className="text-white">{kundliData.planets?.find((p:any) => p.id === 'moon')?.sign}</span>
                  </p>
                </div>
                <button
                  onClick={() => setShowResult(false)}
                  className="flex items-center gap-2 text-electric-blue hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
              </div>

              {/* Data Tables (Western Comprehensive) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 <PlanetaryTable planets={kundliData.planets || []} />
                 <AspectsTable aspects={kundliData.aspects || []} />
              </div>
              <div className="mt-8">
                 <HousesTable houses={kundliData.houses || []} />
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
