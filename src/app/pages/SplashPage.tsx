import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import SplashScreen from '../../imports/SplashScreen';
import imgTtGiconFilled21 from 'figma:asset/833201a44e1f6574b4b85553e0257b63b646f1a3.png';
import imgTitleSplashpage1 from 'figma:asset/ab28b8ccb6468d0bd515cae753d8587fc87d83a0.png';

export default function SplashPage() {
  const navigate = useNavigate();
  const [assetsReady, setAssetsReady] = useState(false);
  const [minDurationElapsed, setMinDurationElapsed] = useState(false);

  useEffect(() => {
    const imageUrls = [imgTtGiconFilled21, imgTitleSplashpage1];
    let remaining = imageUrls.length;

    const markReady = () => {
      remaining -= 1;
      if (remaining <= 0) {
        setAssetsReady(true);
      }
    };

    imageUrls.forEach((url) => {
      const img = new Image();
      img.onload = markReady;
      img.onerror = markReady;
      img.src = url;
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinDurationElapsed(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (assetsReady && minDurationElapsed) {
      navigate('/preview');
    }
  }, [assetsReady, minDurationElapsed, navigate]);

  return <SplashScreen />;
}