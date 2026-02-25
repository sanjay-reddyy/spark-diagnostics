import { useState } from "react";
import { X } from "lucide-react";
// Using doctor-main.png as a placeholder. Replace with 'doctor-sticker.png' when you add the file.
import doctorSticker from "../../assets/images/ai/doctor-sticker.png";

export default function DoctorSticker() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>
        {`
          @keyframes gentleWave {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-5deg); }
            75% { transform: rotate(5deg); }
          }
          
          @keyframes pulseGlow {
            0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6); }
            70% { box-shadow: 0 0 0 15px rgba(16, 185, 129, 0); }
            100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .doctor-sticker-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            font-family: sans-serif;
          }

          .doctor-sticker-wrapper {
            position: relative;
            width: 130px;
            height: 130px;
            border-radius: 50%;
            cursor: pointer;
            /* The pulse effect */
            animation: pulseGlow 2s infinite;
            transition: transform 0.3s ease;
          }

          .doctor-sticker-wrapper:hover {
            transform: scale(1.05);
          }

          .doctor-img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            /* The wave animation */
            animation: gentleWave 3s ease-in-out infinite;
          }

          .sticker-popup {
            background: white;
            padding: 15px 20px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            margin-bottom: 10px;
            position: relative;
            min-width: 220px;
            animation: fadeInUp 0.3s ease-out;
            border: 1px solid #e2e8f0;
            text-align: center;
          }

          .sticker-popup::after {
            content: '';
            position: absolute;
            bottom: -6px;
            right: 50px;
            width: 12px;
            height: 12px;
            background: white;
            transform: rotate(45deg);
            border-bottom: 1px solid #e2e8f0;
            border-right: 1px solid #e2e8f0;
          }
        `}
      </style>

      <div className="doctor-sticker-container">
        {isOpen && (
          <div className="sticker-popup">
            <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} style={{ position: 'absolute', top: '5px', right: '5px', border: 'none', background: 'none', cursor: 'pointer', color: '#94a3b8' }}>
              <X size={16} />
            </button>
            <p style={{ color: '#065f46', fontWeight: 600, margin: 0, fontSize: '15px' }}>How can we help you today?</p>
          </div>
        )}

        <div className="doctor-sticker-wrapper" onClick={() => setIsOpen(!isOpen)}>
          <img src={doctorSticker} alt="Doctor" className="doctor-img" />
        </div>
      </div>
    </>
  );
}