// import { useState, useRef, useEffect } from "react";
// import { useDropzone } from "react-dropzone";
// import { FiUpload, FiTrash2 } from "react-icons/fi";
// import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";

// const ProductUpload = ({ images, setImages, audio, setAudio }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef(null);

//   useEffect(() => {
//     if (audio && typeof audio === "string") {
//       audioRef.current = new Audio(audio);
//     }
//   }, [audio]);

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: { "image/*": [] }, // Accept all image types
//     multiple: true,
//     onDrop: (acceptedFiles) => {
//       const filtered = acceptedFiles.filter(
//         (file) =>
//           !images.some((img) => img instanceof File && img.name === file.name),
//       );
//       setImages((prev) => [...prev, ...filtered]);
//     },
//   });

//   const handleAudioUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setAudio(file);
//       audioRef.current = new Audio(URL.createObjectURL(file));
//       setIsPlaying(false);
//     }
//   };

//   const togglePlay = () => {
//     if (!audioRef.current) return;
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const removeImage = (index) => {
//     const updated = [...images];
//     updated.splice(index, 1);
//     setImages(updated);
//   };

//   // Remove audio
//   const removeAudio = () => {
//     setAudio(null);
//     setIsPlaying(false);
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current = null;
//     }
//   };

//   return (
//     <div className="w-full p-4">
//       {/* Audio Upload */}
//       <div className="mb-4">
//         <label className="block font-semibold mb-2">Sound</label>
//         <div className="flex items-center gap-2 border rounded p-2">
//           <input
//             type="file"
//             accept="audio/*"
//             onChange={handleAudioUpload}
//             className="hidden"
//             id="audio-upload"
//           />
//           <label
//             htmlFor="audio-upload"
//             className="cursor-pointer bg-gray-100 px-4 py-2 rounded border"
//           >
//             Upload Audio
//           </label>

//           {audio && (
//             <div className="flex items-center gap-2">
//               <button onClick={togglePlay} className="text-green-600">
//                 {isPlaying ? <FaPause /> : <FaPlay />}
//               </button>
//               <button className="text-blue-600">
//                 <FaVolumeUp />
//               </button>
//               <button
//                 type="button"
//                 onClick={removeAudio}
//                 className="text-red-500"
//               >
//                 <FiTrash2 />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Image Upload */}
//       <label className="block font-semibold mb-2">
//         Product Images <span className="text-red-500">*</span> (Recommendation
//         1:1)
//       </label>
//       <div
//         {...getRootProps()}
//         className="border-dashed border-2 border-gray-300 p-6 rounded-lg text-center cursor-pointer bg-gray-50 hover:bg-gray-100"
//       >
//         <input {...getInputProps()} />
//         <FiUpload className="text-gray-400 mx-auto mb-2" size={24} />
//         <p className="text-gray-600">Drag or click to upload files</p>
//       </div>

//       {/* Image Previews */}
//       <div className="mt-4 grid grid-cols-3 gap-2">
//         {images.map((image, index) => {
//           const src =
//             typeof image === "string" ? image : URL.createObjectURL(image); // only for new File objects
//           return (
//             <div key={index} className="relative">
//               <img
//                 src={src}
//                 alt="Preview"
//                 className="w-full h-28 object-cover rounded-lg"
//               />
//               <button
//                 type="button"
//                 onClick={() => removeImage(index)}
//                 className="absolute top-1 right-1 bg-white p-1 rounded-full shadow-md"
//               >
//                 <FiTrash2 className="text-red-500" />
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ProductUpload;

import { useState, useRef, useEffect } from "react";
import { useDropzone } from "react-dropzone";

import { FiUpload, FiTrash2 } from "react-icons/fi";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";

const ProductUpload = ({ images = [], setImages, audio, setAudio }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState("");

  const audioRef = useRef(null);
  const audioUrlRef = useRef(null);
  const imageUrlsRef = useRef(new Map());

  // Supported audio formats
  const MAX_AUDIO_SIZE = 20 * 1024 * 1024; // 20 MB
  const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10 MB

  const allowedAudioTypes = [
    "audio/mpeg",
    "audio/mp3",
    "audio/wav",
    "audio/x-wav",
    "audio/ogg",
    "audio/mp4",
    "audio/aac",
    "audio/webm",
    "audio/x-m4a",
  ];

  // Create audio preview URL
  const createAudioUrl = (file) => {
    if (audioUrlRef.current) {
      URL.revokeObjectURL(audioUrlRef.current);
    }

    if (typeof file === "string") {
      audioUrlRef.current = null;
      return file;
    }

    const url = URL.createObjectURL(file);
    audioUrlRef.current = url;

    return url;
  };

  // Initialize audio whenever audio changes
  useEffect(() => {
    if (!audio) {
      audioRef.current?.pause();
      audioRef.current = null;
      setIsPlaying(false);
      return;
    }

    const audioUrl = createAudioUrl(audio);
    const audioElement = new Audio(audioUrl);

    audioRef.current = audioElement;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    audioElement.addEventListener("ended", handleEnded);
    audioElement.addEventListener("pause", handlePause);
    audioElement.addEventListener("play", handlePlay);

    return () => {
      audioElement.pause();

      audioElement.removeEventListener("ended", handleEnded);
      audioElement.removeEventListener("pause", handlePause);
      audioElement.removeEventListener("play", handlePlay);

      if (audioRef.current === audioElement) {
        audioRef.current = null;
      }

      if (audioUrlRef.current && typeof audio !== "string") {
        URL.revokeObjectURL(audioUrlRef.current);
        audioUrlRef.current = null;
      }
    };
  }, [audio]);

  // Audio upload handler
  const handleAudioUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setAudioError("");

    const extension = file.name.split(".").pop().toLowerCase();

    const allowedExtensions = [
      "mp3",
      "mpeg",
      "mpga",
      "wav",
      "ogg",
      "m4a",
      "aac",
      "webm",
    ];

    if (
      !allowedExtensions.includes(extension) &&
      !allowedAudioTypes.includes(file.type)
    ) {
      setAudioError("Unsupported audio format.");
      event.target.value = "";
      return;
    }

    if (file.size > MAX_AUDIO_SIZE) {
      setAudioError("Audio file must be smaller than 20 MB.");
      event.target.value = "";
      return;
    }

    if (file.size === 0) {
      setAudioError("The audio file is empty.");
      event.target.value = "";
      return;
    }

    // Pause previous audio
    audioRef.current?.pause();

    setIsPlaying(false);
    setAudio(file);

    event.target.value = "";
  };

  // Play / Pause audio
  const togglePlay = async () => {
    const player = audioRef.current;

    if (!player) return;

    try {
      if (player.paused) {
        await player.play();
      } else {
        player.pause();
      }
    } catch (error) {
      console.error("Audio playback failed:", error);
      setAudioError("Unable to play this audio file.");
      setIsPlaying(false);
    }
  };

  // Remove audio
  const removeAudio = () => {
    audioRef.current?.pause();
    audioRef.current = null;

    setAudio(null);
    setIsPlaying(false);
    setAudioError("");
  };

  // Image upload handler
  const onDrop = (acceptedFiles, rejectedFiles) => {
    const validFiles = acceptedFiles.filter((file) => {
      if (file.size > MAX_IMAGE_SIZE) {
        return false;
      }

      return !images.some(
        (img) =>
          img instanceof File &&
          img.name === file.name &&
          img.size === file.size,
      );
    });

    if (validFiles.length > 0) {
      setImages((prev) => [...prev, ...validFiles]);
    }

    if (rejectedFiles.length > 0) {
      console.warn("Some images were rejected:", rejectedFiles);
    }

    const oversized = acceptedFiles.some((file) => file.size > MAX_IMAGE_SIZE);

    if (oversized) {
      console.warn("Each image must be smaller than 10 MB.");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/webp": [".webp"],
      "image/gif": [".gif"],
    },
    maxSize: MAX_IMAGE_SIZE,
    multiple: true,
    onDrop,
  });

  // Image preview URLs
  const getImagePreview = (image) => {
    if (typeof image === "string") {
      return image;
    }

    if (!imageUrlsRef.current.has(image)) {
      imageUrlsRef.current.set(image, URL.createObjectURL(image));
    }

    return imageUrlsRef.current.get(image);
  };

  // Remove image
  const removeImage = (index) => {
    const image = images[index];

    if (image instanceof File) {
      const url = imageUrlsRef.current.get(image);

      if (url) {
        URL.revokeObjectURL(url);
        imageUrlsRef.current.delete(image);
      }
    }

    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  // Cleanup image URLs when component unmounts
  useEffect(() => {
    return () => {
      imageUrlsRef.current.forEach((url) => {
        URL.revokeObjectURL(url);
      });

      imageUrlsRef.current.clear();
    };
  }, []);

  return (
    <div className="w-full p-4">
      {/* AUDIO UPLOAD */}
      <div className="mb-6">
        <label className="block font-semibold mb-2">Sound</label>

        <div className="flex flex-wrap items-center gap-3 border rounded-lg p-3">
          <input
            type="file"
            accept=".mp3,.mpeg,.mpga,.wav,.ogg,.m4a,.aac,.webm,audio/*"
            onChange={handleAudioUpload}
            className="hidden"
            id="audio-upload"
          />

          <label
            htmlFor="audio-upload"
            className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded border text-sm font-medium"
          >
            <span className="flex items-center gap-2">
              <FiUpload />
              {audio ? "Replace Audio" : "Upload Audio"}
            </span>
          </label>

          {audio && (
            <div className="flex items-center gap-3">
              {/* Play / Pause */}
              <button
                type="button"
                onClick={togglePlay}
                className="text-green-600 hover:text-green-700"
                title={isPlaying ? "Pause audio" : "Play audio"}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>

              <FaVolumeUp className="text-blue-500" />

              <span className="text-sm text-gray-600 max-w-[180px] truncate">
                {typeof audio === "string" ? "Existing audio" : audio.name}
              </span>

              {/* Remove Audio */}
              <button
                type="button"
                onClick={removeAudio}
                className="text-red-500 hover:text-red-700"
                title="Remove audio"
              >
                <FiTrash2 />
              </button>
            </div>
          )}
        </div>

        {audioError && (
          <p className="text-red-500 text-sm mt-2">{audioError}</p>
        )}

        <p className="text-gray-400 text-xs mt-2">
          Supported: MP3, MPEG, WAV, OGG, M4A, AAC, WEBM. Maximum size: 20 MB.
        </p>
      </div>

      {/* IMAGE UPLOAD */}
      <label className="block font-semibold mb-2">
        Product Images <span className="text-red-500">*</span> (Recommendation
        1:1)
      </label>

      <div
        {...getRootProps()}
        className={`border-dashed border-2 p-6 rounded-lg text-center cursor-pointer transition ${
          isDragActive
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 bg-gray-50 hover:bg-gray-100"
        }`}
      >
        <input {...getInputProps()} />

        <FiUpload className="text-gray-400 mx-auto mb-2" size={24} />

        <p className="text-gray-600">
          {isDragActive
            ? "Drop your images here..."
            : "Drag or click to upload images"}
        </p>

        <p className="text-xs text-gray-400 mt-2">
          JPG, PNG, WEBP, GIF. Maximum 10 MB per image.
        </p>
      </div>

      {/* IMAGE PREVIEWS */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        {images.map((image, index) => {
          const src = getImagePreview(image);

          return (
            <div
              key={
                image instanceof File
                  ? `${image.name}-${image.size}-${index}`
                  : `${image}-${index}`
              }
              className="relative group"
            >
              <img
                src={src}
                alt={`Product ${index + 1}`}
                className="w-full h-28 object-cover rounded-lg"
              />

              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-white p-2 rounded-full shadow-md hover:bg-red-50"
                title="Remove image"
              >
                <FiTrash2 className="text-red-500" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductUpload;
