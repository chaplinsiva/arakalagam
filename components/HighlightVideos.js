"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Eye, ExternalLink } from "lucide-react";
import Image from "next/image";
import VideoModal from "./VideoModal";

const videos = [
  {
    id: "twitter-dmkitwing",
    type: "twitter",
    videoId: "1996952630422044982",
    youtubeUrl: "https://x.com/DMKITwing/status/1996952630422044982?s=20",
    title: "Viral Expose shared by DMK IT Wing",
    description: "Crucial highlight catching the attention of major political wings on X (Twitter).",
    views: "Viral",
    category: "Political",
  },
  {
    id: "srimathi-vanjinathan",
    videoId: "QlkXjLBt_Ic",
    youtubeUrl: "https://www.youtube.com/watch?v=QlkXjLBt_Ic",
    title: "Advocate Vanjinathan Exposes the investigation of Srimathi case",
    description: "Viral exclusive interview breaking down the entire Srimathi case investigation that shook Tamil Nadu",
    views: "1M+",
    category: "Investigative",
  },
  {
    id: "highlight-2",
    videoId: "5NkYwHX72P4",
    youtubeUrl: "https://www.youtube.com/watch?v=5NkYwHX72P4",
    title: "Impactful Ground Reporting & Analysis",
    description: "In-depth political analysis and ground coverage driving major social conversations.",
    views: "Viral",
    category: "Political",
  },
  {
    id: "highlight-3",
    videoId: "doqXRDRNrOU",
    youtubeUrl: "https://www.youtube.com/watch?v=doqXRDRNrOU",
    title: "Crucial Social Justice Expose",
    description: "A hard-hitting story exposing truth, raising marginalized voices, and demanding accountability.",
    views: "Viral",
    category: "Social Justice",
  },
  {
    id: "ameer-interview",
    videoId: "SCKLoWtA6pU",
    youtubeUrl: "https://www.youtube.com/watch?v=SCKLoWtA6pU",
    title: "Direct Ameer Interview",
    description: "In-depth and fiery interview with Director Ameer, breaking down contemporary issues.",
    views: "Viral",
    category: "Political",
  },
  {
    id: "nallakannu-interview",
    videoId: "jrSxKmFgSyo",
    youtubeUrl: "https://youtu.be/jrSxKmFgSyo",
    title: "Nallakannu Ayya Interview",
    description: "Priceless insights and historical perspective from veteran communist leader Nallakannu Ayya.",
    views: "Viral",
    category: "Political",
  },
  {
    id: "A3AbtZ15YOI",
    videoId: "A3AbtZ15YOI",
    youtubeUrl: "https://youtu.be/A3AbtZ15YOI",
    title: "அரசு வன்முறையை பேசும் ஜெய் பீம் முக்கியமான படம் | SuryavsPmk | Thirumavalavan Intervew",
    description: "Thirumavalavan interview on Jai Bhim movie issue and state violence.",
    views: "Viral",
    category: "Political",
  },
  {
    id: "STs3tpRwcoI",
    videoId: "STs3tpRwcoI",
    youtubeUrl: "https://youtu.be/STs3tpRwcoI",
    title: "திடீர் என மதுரை ஆய்வில் Minister Mano Thangaraj !! Fileலோடு அதிகாரிகள் சந்தோசத்தில் மக்கள் !!",
    description: "Minister Mano Thangaraj surprise inspection in Madurai.",
    views: "Viral",
    category: "Political",
  },
  {
    id: "P-G9hBMoLQw",
    videoId: "P-G9hBMoLQw",
    youtubeUrl: "https://youtu.be/P-G9hBMoLQw",
    title: "தர்ஹா கிட்ட ஏன் தீபம் ஏத்தனும்? நீதிபதி செய்றது தப்பு !! CM செஞ்சதுதான் சரி மதுரை மக்கள் கருத்து !!",
    description: "Public opinion in Madurai regarding the recent religious harmony debate.",
    views: "Viral",
    category: "Political",
  },
  {
    id: "hq7BuZ98ovw",
    videoId: "hq7BuZ98ovw",
    youtubeUrl: "https://youtu.be/hq7BuZ98ovw",
    title: "முருகனுக்கும் Amitshahக்கும் என்ன சம்மந்தம் ! 22ம் தேதி ஒன்னும் நடக்காது! மிரட்டிவிட்ட மதுரை மக்கள்!",
    description: "Madurai public voices their stark opinions on political developments and Amit Shah.",
    views: "Viral",
    category: "Political",
  },
  {
    id: "qn_IpSnBnhA",
    videoId: "qn_IpSnBnhA",
    youtubeUrl: "https://youtu.be/qn_IpSnBnhA",
    title: "பல பாலியல் லீலையில் சிக்கிய பிரதமர் ? | ஆதாரத்துடன் அம்பலமாகும் Madhu Purnima ! Bedroom Jalsa Party?",
    description: "Investigative expose and allegations brought forward with evidence.",
    views: "Viral",
    category: "Investigative",
  },
  {
    id: "T12eE0ajZHA",
    videoId: "T12eE0ajZHA",
    youtubeUrl: "https://youtu.be/T12eE0ajZHA",
    title: "அப்பத்தான் அம்மா இப்ப ஸ்டாலின் தான், காரணம் இதுதான்.. | கடைசி நேர மக்கள் வைத்த ட்விஸ்ட்| Madurai",
    description: "Madurai people's twist and perspective on Stalin and past leaders.",
    views: "Viral",
    category: "Political",
  },
  {
    id: "9-_RWLVM0aQ",
    videoId: "9-_RWLVM0aQ",
    youtubeUrl: "https://youtu.be/9-_RWLVM0aQ",
    title: "உங்க அப்பன் செத்தா இப்படி விட்டுட்டு ஒடுவியாடா ? மக்கள் கொந்தளிப்பு ! Karurல் தொடரும் பதற்றம் !!",
    description: "Public outrage and tense ground situation reported from Karur.",
    views: "Viral",
    category: "Social Justice",
  },
  {
    id: "xkDiL0KAFzU",
    videoId: "xkDiL0KAFzU",
    youtubeUrl: "https://youtu.be/xkDiL0KAFzU",
    title: "Seemanக்கு ஆதரவாக BJP Erode களத்தில் மக்கள் சொன்ன அதிர்ச்சி Report | களத்தில் வெளிவந்த உண்மை !",
    description: "Ground report from Erode revealing surprising public stance regarding Seeman and BJP.",
    views: "Viral",
    category: "Investigative",
  },
  {
    id: "8qfQG-kpREY",
    videoId: "8qfQG-kpREY",
    youtubeUrl: "https://youtu.be/8qfQG-kpREY",
    title: "ஓம் தமிழர் Seeman என்பதை இப்ப நம்புறீங்களா? VCK Vanniyarasu அதிரடி! | இப்ப தலித் CM கேட்பாரா Aadhav?",
    description: "VCK Vanniyarasu fires back at Seeman in this intense political discourse.",
    views: "Viral",
    category: "Political",
  },
  {
    id: "R7-0oWX3vco",
    videoId: "R7-0oWX3vco",
    youtubeUrl: "https://youtu.be/R7-0oWX3vco",
    title: "Erodeல் கடைசி நேர பரப்புரையில் அடிதடி NTKயினர் ரௌடித்தனம் ! Spot Report | Seeman | Chandrakumar DMK",
    description: "Spot report covering the clashes and tension during unexpected ground events in Erode.",
    views: "Viral",
    category: "Investigative",
  }
];

const categories = ["All", "Investigative", "Political", "Social Justice"];

export default function HighlightVideos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [modalVideo, setModalVideo] = useState(null);

  const filtered =
    activeCategory === "All"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  return (
    <section id="videos" className="relative py-24 lg:py-32">
      <div className="section-divider w-full absolute top-0" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-[#D4AF37] font-medium">
            Featured Content
          </span>
          <h2 className="font-[var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Highlight <span className="gold-gradient">Videos</span>
          </h2>
          <p className="text-[#A0A0B0] max-w-2xl mx-auto text-lg">
            Our most impactful stories — the videos that drove national
            conversations and demanded accountability.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4B0082] to-[#D4AF37] mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#4B0082] to-[#6A1BA5] text-white shadow-[0_0_20px_rgba(75,0,130,0.4)]"
                  : "border border-[rgba(212,175,55,0.15)] text-[#A0A0B0] hover:text-[#D4AF37] hover:border-[rgba(212,175,55,0.3)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((video, i) => {
            const isTwitter = video.type === "twitter";
            return (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="glass-card overflow-hidden group cursor-pointer"
              onClick={() => isTwitter ? window.open(video.youtubeUrl, '_blank') : setModalVideo(video.videoId)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                {isTwitter ? (
                  <div className="w-full h-full bg-[#0B0B0F] flex flex-col items-center justify-center opacity-80 group-hover:scale-110 transition-transform duration-700">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-[#A0A0B0]"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </div>
                ) : (
                  <Image
                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[#4B0082]/0 group-hover:bg-[#4B0082]/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.5)]">
                    {isTwitter ? (
                      <svg viewBox="0 0 24 24" fill="#0B0B0F" className="w-7 h-7"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    ) : (
                      <Play className="w-7 h-7 text-[#0B0B0F] fill-current ml-1" />
                    )}
                  </div>
                </div>
                {/* Category badge */}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#4B0082]/80 backdrop-blur-sm text-xs font-medium text-[#D4AF37] border border-[rgba(212,175,55,0.2)]">
                  {video.category}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-[var(--font-outfit)] text-lg font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-[#A0A0B0] text-sm mb-4 line-clamp-2">
                  {video.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#A0A0B0]">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm font-medium">{video.views}</span>
                  </div>
                  <span className="text-[#D4AF37] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    {isTwitter ? 'View Tweet' : 'Watch'} <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          )})}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.youtube.com/@ARAKALAGAM/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[rgba(212,175,55,0.3)] text-[#D4AF37] font-medium hover:bg-[rgba(212,175,55,0.08)] hover:border-[rgba(212,175,55,0.5)] transition-all duration-300"
          >
            View All Videos on YouTube
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal
        videoId={modalVideo}
        isOpen={!!modalVideo}
        onClose={() => setModalVideo(null)}
      />
    </section>
  );
}
