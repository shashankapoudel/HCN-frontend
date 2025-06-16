// import { useState, useRef } from "react";
// import { useDropzone } from "react-dropzone";
// import { FiUpload, FiTrash2 } from "react-icons/fi";
// import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";

// const ProductUpload = ({ images, setImages, audio, setAudio }) => {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const audioRef = useRef(null);


//     const { getRootProps, getInputProps } = useDropzone({
//         accept: "image/*",
//         multiple: true,
//         onDrop: (acceptedFiles) => {
//             setImages([...images, ...acceptedFiles]);
//         },
//     });

//     const handleAudioUpload = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setAudio(file);
//             audioRef.current = new Audio(URL.createObjectURL(file));
//         }
//     };


//     const togglePlay = () => {
//         if (audioRef.current) {
//             if (isPlaying) {
//                 audioRef.current.pause();
//             } else {
//                 audioRef.current.play();
//             }
//             setIsPlaying(!isPlaying);
//         }
//     };


//     const removeImage = (index) => {
//         setImages(images.filter((_, i) => i !== index));
//     };

//     const removeAudio = () => {
//         setAudio(null);
//         setIsPlaying(false);
//         if (audioRef.current) {
//             audioRef.current.pause();
//             audioRef.current = null;
//         }
//     };

//     return (
//         <div className="w-full p-4">

//             <div className="mb-4">
//                 <label className="block font-semibold mb-2">Sound</label>
//                 <div className="flex items-center gap-2 border rounded p-2">
//                     <input type="file" accept="audio/*" onChange={handleAudioUpload} className="hidden" id="audio-upload" />
//                     <label htmlFor="audio-upload" className="cursor-pointer bg-gray-100 px-4 py-2 rounded border">Upload Audio</label>
//                     {audio && (
//                         <div className="flex items-center gap-2">
//                             <button onClick={togglePlay} className="text-green-600">
//                                 {isPlaying ? <FaPause /> : <FaPlay />}
//                             </button>
//                             <button className="text-blue-600"><FaVolumeUp /></button>
//                             <button onClick={removeAudio} className="text-red-500"><FiTrash2 /></button>
//                         </div>
//                     )}
//                 </div>
//             </div>


//             <label className="block font-semibold mb-2">Product Images <span className="text-red-500">*</span> (Recommendation 1:1)</label>
//             <div {...getRootProps()} className="border-dashed border-2 border-gray-300 p-6 rounded-lg text-center cursor-pointer bg-gray-50 hover:bg-gray-100">
//                 <input {...getInputProps()} />
//                 <FiUpload className="text-gray-400 mx-auto mb-2" size={24} />
//                 <p className="text-gray-600">Drag or click to upload files</p>
//             </div>


//             <div className="mt-4 grid grid-cols-3 gap-2">
//                 {images.map((image, index) => (
//                     <div key={index} className="relative">
//                         <img src={URL.createObjectURL(image)} alt="Preview" className="w-full h-28 object-cover rounded-lg" />
//                         <button onClick={() => removeImage(index)} className="absolute top-1 right-1 bg-white p-1 rounded-full shadow-md">
//                             <FiTrash2 className="text-red-500" />
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ProductUpload;



import { useState, useRef, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload, FiTrash2 } from "react-icons/fi";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";

const ProductUpload = ({ images, setImages, audio, setAudio }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // ✅ Initialize audioRef for existing audio (if string URL)
    useEffect(() => {
        if (audio && typeof audio === "string") {
            audioRef.current = new Audio(audio);
        }
    }, [audio]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        multiple: true,
        onDrop: (acceptedFiles) => {
            const newFiles = acceptedFiles.filter(file => {
                const name = file.name;
                return !images.some(existing =>
                    typeof existing === "string" ? existing.includes(name) : existing.name === name
                );
            });
            setImages(prev => [...prev, ...newFiles]);
        },
    });

    const handleAudioUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setAudio(file);
            audioRef.current = new Audio(URL.createObjectURL(file));
        }
    };

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const removeImage = (index) => {
        const updated = [...images];
        updated.splice(index, 1);
        setImages(updated);
    };

    const removeAudio = () => {
        setAudio(null);
        setIsPlaying(false);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
        }
    };

    return (
        <div className="w-full p-4">
            {/* === AUDIO UPLOAD === */}
            <div className="mb-4">
                <label className="block font-semibold mb-2">Sound</label>
                <div className="flex items-center gap-2 border rounded p-2">
                    <input
                        type="file"
                        accept="audio/*"
                        onChange={handleAudioUpload}
                        className="hidden"
                        id="audio-upload"
                    />
                    <label htmlFor="audio-upload" className="cursor-pointer bg-gray-100 px-4 py-2 rounded border">
                        Upload Audio
                    </label>

                    {audio && (
                        <div className="flex items-center gap-2">
                            <button onClick={togglePlay} className="text-green-600">
                                {isPlaying ? <FaPause /> : <FaPlay />}
                            </button>
                            <button className="text-blue-600"><FaVolumeUp /></button>
                            <button onClick={removeAudio} className="text-red-500"><FiTrash2 /></button>
                        </div>
                    )}
                </div>
            </div>

            {/* === IMAGE UPLOAD === */}
            <label className="block font-semibold mb-2">
                Product Images <span className="text-red-500">*</span> (Recommendation 1:1)
            </label>
            <div
                {...getRootProps()}
                className="border-dashed border-2 border-gray-300 p-6 rounded-lg text-center cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
                <input {...getInputProps()} />
                <FiUpload className="text-gray-400 mx-auto mb-2" size={24} />
                <p className="text-gray-600">Drag or click to upload files</p>
            </div>

            {/* === IMAGE PREVIEW === */}
            <div className="mt-4 grid grid-cols-3 gap-2">
                {images.map((image, index) => {
                    const src = typeof image === "string" ? image : URL.createObjectURL(image);
                    return (
                        <div key={index} className="relative">
                            <img
                                src={src}
                                alt="Preview"
                                className="w-full h-28 object-cover rounded-lg"
                            />
                            <button
                                onClick={() => removeImage(index)}
                                className="absolute top-1 right-1 bg-white p-1 rounded-full shadow-md"
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
