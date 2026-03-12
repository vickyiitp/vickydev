import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, Send, ShieldCheck, LogIn } from 'lucide-react';
import { db, auth } from '../firebase';
import { collection, onSnapshot, doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

interface RatingData {
  userId: string;
  websiteReliability: number;
  projectQuality: number;
  portfolioQuality: number;
  skillQuality: number;
  communicationSkill: number;
  timestamp: any;
}

export default function LiveRatings() {
  const [ratings, setRatings] = useState<RatingData[]>([]);
  const [userRating, setUserRating] = useState<Partial<RatingData>>({
    websiteReliability: 0,
    projectQuality: 0,
    portfolioQuality: 0,
    skillQuality: 0,
    communicationSkill: 0,
  });
  const [hasRated, setHasRated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthReady(true);
        checkUserRating(user.uid);
      } else {
        setAuthReady(false);
        setRatings([]);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (!authReady) return;

    const unsubscribe = onSnapshot(collection(db, 'ratings'), (snapshot) => {
      const data = snapshot.docs.map(doc => doc.data() as RatingData);
      setRatings(data);
    });

    return () => unsubscribe();
  }, [authReady]);

  const checkUserRating = async (uid: string) => {
    try {
      const docRef = doc(db, 'ratings', uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setHasRated(true);
        setUserRating(docSnap.data() as RatingData);
      }
    } catch (error) {
      console.error("Error checking rating:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google sign-in failed:", error);
    }
  };

  const handleRatingChange = (field: keyof RatingData, value: number) => {
    if (hasRated || !authReady) return;
    setUserRating(prev => ({ ...prev, [field]: value }));
  };

  const submitRating = async () => {
    if (!auth.currentUser) return;
    
    const { websiteReliability, projectQuality, portfolioQuality, skillQuality, communicationSkill } = userRating;
    
    if (!websiteReliability || !projectQuality || !portfolioQuality || !skillQuality || !communicationSkill) {
      alert("Please rate all categories before submitting.");
      return;
    }

    setIsSubmitting(true);
    try {
      const ratingData: RatingData = {
        userId: auth.currentUser.uid,
        websiteReliability,
        projectQuality,
        portfolioQuality,
        skillQuality,
        communicationSkill,
        timestamp: serverTimestamp(),
      };

      await setDoc(doc(db, 'ratings', auth.currentUser.uid), ratingData);
      setHasRated(true);
    } catch (error) {
      console.error("Error submitting rating:", error);
      alert("Failed to submit rating. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateAverage = (field: keyof RatingData) => {
    if (ratings.length === 0) return 0;
    const sum = ratings.reduce((acc, curr) => acc + (curr[field] as number), 0);
    return (sum / ratings.length).toFixed(1);
  };

  const categories = [
    { key: 'websiteReliability', label: 'Website Reliability' },
    { key: 'projectQuality', label: 'Project Quality' },
    { key: 'portfolioQuality', label: 'Portfolio Quality' },
    { key: 'skillQuality', label: 'Skill Quality' },
    { key: 'communicationSkill', label: 'Communication Skill' },
  ];

  const overallAverage = ratings.length > 0 
    ? (categories.reduce((acc, cat) => acc + parseFloat(calculateAverage(cat.key as keyof RatingData) as string), 0) / categories.length).toFixed(1)
    : '0.0';

  return (
    <section id="ratings" className="py-24 px-6 sm:px-12 lg:px-24 bg-transparent border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6">
            <ShieldCheck className="w-4 h-4 text-primary-royal" />
            <span className="text-xs font-medium tracking-widest uppercase text-text-silver">Live Data Collection</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-text-white mb-4 font-heading tracking-tight">Client Trust & Ratings</h2>
          <p className="text-lg text-text-silver/70 max-w-2xl mx-auto font-light">
            Transparency is key. Every visitor has the access to rate my skills. The data below is live and authenticated.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Live Averages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 lg:p-12 rounded-3xl glass-panel relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold text-white mb-8 font-heading">Live Performance Metrics</h3>
            
            <div className="flex items-center gap-6 mb-10 pb-8 border-b border-white/10">
              <div className="text-6xl font-bold gold-gradient-text font-heading">{overallAverage}</div>
              <div>
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`w-6 h-6 ${star <= Math.round(parseFloat(overallAverage)) ? 'text-primary-royal fill-primary-royal' : 'text-white/10 fill-white/10'}`} />
                  ))}
                </div>
                <p className="text-sm font-medium text-text-silver/60 uppercase tracking-wider">Overall Rating ({ratings.length} Reviews)</p>
              </div>
            </div>

            <div className="space-y-6">
              {categories.map((cat, i) => {
                const avg = parseFloat(calculateAverage(cat.key as keyof RatingData) as string);
                const percentage = (avg / 5) * 100;
                return (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-text-silver/90 tracking-wide">{cat.label}</span>
                      <span className="text-primary-royal font-mono font-bold">{avg > 0 ? avg : '-'} / 5</span>
                    </div>
                    <div className="w-full h-1.5 bg-bg-dark rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                        className="h-full bg-gradient-to-r from-primary-royal to-[#B8962E] rounded-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Rate Me Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 lg:p-12 rounded-3xl glass-panel relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold text-white mb-2 font-heading">Rate My Skills</h3>
            <p className="text-sm text-text-silver/60 mb-8">Your feedback is recorded securely and updates the live metrics instantly.</p>
            
            <div className="space-y-6 mb-10">
              {categories.map((cat, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-sm text-text-silver/90">{cat.label}</span>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        disabled={hasRated}
                        onClick={() => handleRatingChange(cat.key as keyof RatingData, star)}
                        aria-label={`Rate ${star} out of 5 stars for ${cat.label}`}
                        className={`transition-all duration-200 ${hasRated ? 'cursor-default' : 'cursor-pointer hover:scale-110'}`}
                      >
                        <Star 
                          className={`w-6 h-6 ${
                            (userRating[cat.key as keyof RatingData] || 0) >= star 
                              ? 'text-primary-royal fill-primary-royal' 
                              : 'text-white/10 fill-white/10'
                          }`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {hasRated ? (
              <div className="w-full py-4 rounded-xl bg-primary-royal/10 border border-primary-royal/30 text-center text-primary-royal font-medium flex items-center justify-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                Thank you for your rating!
              </div>
            ) : !authReady ? (
              <button
                onClick={handleGoogleSignIn}
                className="w-full py-4 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <LogIn className="w-5 h-5" />
                Sign in with Google to Rate
              </button>
            ) : (
              <button
                onClick={submitRating}
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-primary-royal text-bg-dark font-bold hover:bg-[#B8962E] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Rating'}
                {!isSubmitting && <Send className="w-4 h-4" />}
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
