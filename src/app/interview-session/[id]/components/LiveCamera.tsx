'use client';

import { useEffect, useRef, useState } from 'react';
import { type CameraError } from './InterviewQuestionList';

interface LiveCameraPropType {
  setMediaError: (data: string) => void;
  stream: MediaStream | null;
  setStream: (data: MediaStream) => void;
}

export const LiveCamera = ({
  setMediaError,
  stream,
  setStream,
}: LiveCameraPropType) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const initCamera = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const mic = devices.find(
        (d) => d.kind === 'audioinput' && d.deviceId !== 'default'
      );

      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: {
          deviceId: mic?.deviceId,
        },
      });
      setStream(mediaStream);
      // setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error: any) {
      switch (error.name) {
        case 'NotAllowedError':
          setMediaError('Camera or microphone access was denied.');
          break;
        case 'NotFoundError':
          setMediaError('No camera or microphone found on this device.');
          break;
        case 'NotReadableError':
          setMediaError(
            'Camera or microphone is currently being used by another app. Please close that.'
          );
          break;
        default:
          setMediaError('Something went wrong while accessing the camera.');
      }
    }
  };
  useEffect(() => {
    initCamera();

    return () => {
      stream?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay muted className="max-w-4/5 rounded-md" />
    </div>
  );
};
