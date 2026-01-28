import { useEffect, useState } from "react";
import ProductUpload from "./AddImageAudio";
import BASE_URL from "../../config/api";
import AccessorisUpload from "./AccessorisUpload";
import ReactQuill from "react-quill";


const AddProductModal = ({ isOpen, onClose, existingData, setRefresh,refresh }) => {

    const [name, setName] = useState("")
    const [weight, setWeight] = useState("")
    const [category, setCategory] = useState("")
    const [subcategory, setSubCategory] = useState("")
    const [stock, setStock] = useState("")
    const [price, setPrice] = useState("")
    const [size, setSize] = useState("")
    const [material, setMaterial] = useState("")
    const [overview, setOverview] = useState("")
    const [description, setDescription] = useState("")
    const [images, setImages] = useState([]);
    const [audio, setAudio] = useState(null);
    const [subcategorycategory, setSubcategorycategory] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [label, setLabel] = useState("")


    const [filteredSubcategories, setFilteredSubcategories] = useState([]);
    const [filteredSubcategorycategory, setFilteredSubcategorycategory] = useState([]);

    const productCategory = ['Select main category', 'singing-bowls', 'ritual-items', 'statues', 'himalayas-art&paintings', 'himalayas-hemp', 'himalayas-crystals', 'himalayas-healingcollections'];

    const categoryofSubcategory = ['select category', 'antique', 'handmade', 'machinemade', 'accessories', "prayer-wheel", "prayer-flags", "mala&bala", "wooden-products", 'incenses&burners', 'felt-products', "thankas&paintings", "canvas&arts", "bags&accessories", "wellness&decor", "sound-healing-courses", "gongs", "bell&tingsha", "shamic-drump"]


    const productMaterials = ['select material', 'metal', 'crystal', 'wood', 'leather'];


    const categorySubcategories = {
        "singing-bowls": ['Select sub-category', 'antique', 'handmade', 'machinemade', 'accessories'],
        "ritual-items": ['Select sub-category', "prayer-wheel", "prayer-flags", "mala&bala", "wooden-products", 'incenses&burners', 'felt-products', 'living-collections'],
        "statues": [],
        "himalayas-art&paintings": ['Select sub-category', "thankas&paintings", "canvas&arts"],
        "himalayas-hemp": ['Select sub-category', "bags&accessories", "wellness&decor"],
        "himalayas-crystals": [],
        "himalayas-healingcollections": ['Select sub-category', "sound-healing-courses", "gongs", "bell&tingsha", "shamic-drump"],
    };


    const subcategoriescategories = {
        "antique": ['select', 'jambati', 'manipuri', 'naga', 'ultabati', 'thadobati', 'lingman', 'kopre', 'mani', 'old'],
        "handmade": ['select', 'plain', 'fullmoon', 'healing', 'note-color', 'chakra-zodiac', 'engraved', 'large', 'lingam', 'hand', 'himalayas'],
        "machinemade": ['select', 'note-healing', 'chakra', 'himalayas-gift', 'hand-hammered'],
        "accessories": ['select', 'sticks&mallets', 'pillows', 'himalayas'],
        "wooden-products": ['select', 'windows', 'mask'],
        "incenses&burners": ['select', 'incenses', 'burners'],
        "living-collections": ['select', 'gorkhali-khukuri'],
    }




    useEffect(() => {
        if (category) {
            setFilteredSubcategories(categorySubcategories[category] || []);
            setSubCategory("");
        }
    }, [category]);

    useEffect(() => {
        if (subcategory) {
            setFilteredSubcategorycategory(subcategoriescategories[subcategory] || [])
            setSubcategorycategory("")
        }
    }, [subcategory])

    console.log(existingData)
    useEffect(() => {
        if (existingData) {
            setName(existingData.name || "")
            setWeight(existingData.weight || "")
            setCategory(existingData.category || "")
            setSubCategory(existingData.subcategory || "")
            setStock(existingData.stock || "")
            setPrice(existingData.price || "")
            setSize(existingData.size || "")
            setMaterial(existingData.material || "")
            setLabel(existingData.Label || "")
            setOverview(existingData.overview || "")
            setDescription(existingData.description || "")
            setImages(existingData.images || []);
            setAudio(existingData.audio || null)
            setSubcategorycategory(existingData.subcategorycategory || "")

        } else {
            setName("")
            setWeight("")
            setCategory("")
            setSubCategory("")
            setStock("")
            setPrice("")
            setSize("")
            setMaterial("")
            setLabel("")
            setOverview("")
            setDescription("")
            setImages([])
            setAudio(null)
        }
    }, [existingData]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        formData.append("name", name);
        formData.append("category", category);
        formData.append("subcategory", subcategory);
        formData.append("subcategorycategory", subcategorycategory);
        formData.append("weight", weight);
        formData.append("stock", stock);
        formData.append("price", price);
        formData.append("size", size);
        formData.append("material", material);
        formData.append("label", label);
        formData.append("overview", overview);
        formData.append("description", description);

        images.forEach((image) => {
            if (image instanceof File) {
                formData.append("images", image);
            } else if (typeof image === "string") {
                formData.append("existingImages", image);
            }
        });

        if (audio) {
            formData.append("audio", audio);
        }

        try {
            const res = await fetch(!existingData ? `${BASE_URL}/product/admin/addproduct` : `${BASE_URL}/product/updateproduct/${existingData._id}`, {
                method: 'POST',
                body: formData
            });
   

            const responseData = await res.json();
            console.log(responseData);
            setName("");
            setWeight("");
            setCategory("");
            setSubCategory("");
            setSubcategorycategory("");
            setStock("");
            setPrice("");
            setSize("");
            setMaterial("");
            setOverview("");
            setDescription("");
            setLabel("")
            setImages([]);
            setAudio(null);
            setFilteredSubcategories([]);
            setFilteredSubcategorycategory([]);
            onClose()
            setRefresh(!refresh)
        } catch (error) {
            console.error("Error uploading product:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const Label = ["Select", " People's favourite", "Latest Products", "On Sale"]


    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-sm">
            <div className="bg-white p-6 rounded-lg w-[85%] h-[80vh] shadow-lg flex flex-col">
                <h2 className="text-xl font-bold mb-4">Add New Product</h2>

                <form onSubmit={handleSubmit}
                    className="flex flex-grow w-full overflow-hidden">
                    {/* Left Side: Scrollable Form */}
                    <div className="flex flex-col w-2/3 pr-4 overflow-y-auto h-full">
                        <div className="grid grid-cols-2 gap-4">

                            <div>
                                <label
                                    className="block mb-2">
                                    Product Name*
                                </label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    className="w-full p-2 border rounded mb-4"
                                    placeholder="Enter product name"
                                />
                            </div>

                            <div>
                                <label className="block mb-2"> Main Category*</label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full p-2 border rounded mb-4"

                                >

                                    {productCategory.map((category, index) => (
                                        <option key={index}>{category}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block mb-2">Sub-Category</label>
                                <select
                                    value={subcategory}
                                    onChange={(e) => setSubCategory(e.target.value)}
                                    className="w-full p-2 border rounded mb-4">
                                    {
                                        filteredSubcategories.map((category, index) => (
                                            <option key={index}>{category}</option>
                                        ))}
                                </select>
                            </div>

                            <div>
                                <label className="block mb-2">Category</label>
                                <select
                                    value={subcategorycategory}
                                    onChange={(e) => setSubcategorycategory(e.target.value)}
                                    className="w-full p-2 border rounded mb-4">
                                    {
                                        filteredSubcategorycategory.map((category, index) => (
                                            <option key={index}>{category}</option>
                                        ))}
                                </select>
                            </div>

                            <div>
                                <label
                                    className="block mb-2">
                                    Weight*
                                </label>
                                <input
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    type="text"
                                    className="w-full p-2 border rounded mb-4"
                                    placeholder="Enter the weight of product"
                                />
                            </div>

                            <div>
                                <label
                                    className="block mb-2">
                                    Stock(in units)*
                                </label>
                                <input
                                    value={stock}
                                    onChange={(e) => setStock(e.target.value)}
                                    type="text"
                                    className="w-full p-2 border rounded mb-4"
                                    placeholder="Enter stock amount"
                                />
                            </div>

                            <div>
                                <label className="block mb-2">
                                    Selling Price (in dollars)
                                </label>
                                <input
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    type="text"
                                    className="w-full p-2 border rounded mb-4"
                                    placeholder="Enter price"
                                />
                            </div>

                            <div>
                                <label className="block mb-2">Label</label>
                                <select
                                    value={label}
                                    onChange={(e) => setLabel(e.target.value)}
                                    className="w-full p-2 border rounded mb-4">
                                    {
                                        Label.map((l, index) => (
                                            <option key={index}>{l}</option>
                                        ))}
                                </select>
                            </div>

                            <div>
                                <label
                                    className="block mb-2">
                                    Size (in cms)
                                </label>

                                <input
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                    type="text"
                                    className="w-full p-2 border rounded mb-4"
                                    placeholder="Enter size"
                                />
                            </div>

                            <div>
                                <label className="block mb-2">Material</label>
                                <select
                                    value={material}
                                    onChange={(e) => setMaterial(e.target.value)}
                                    className="w-full p-2 border rounded mb-4">
                                    {productMaterials.map((material, index) => (
                                        <option key={index}>{material}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className=" text-gray-700 font-bold mb-2">Product Overview</label>
                            {/* <textarea
                                value={overview}
                                onChange={(e) => setOverview(e.target.value)}
                                className="w-full h-24 border p-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Type your message..."
                                required
                            /> */}

                                            <ReactQuill
                                                    theme="snow"
                                                    value={overview}
                                                    onChange={setOverview}
                                                    className="mb-4"
                                                    // style={{ height: "180px" }}
                                                />


                        </div>

                        <div>
                            <label className=" text-gray-700 font-bold mb-2">Product Description</label>
                            {/* <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full h-32 border p-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Type your message..."
                                required
                            /> */}

                                    <ReactQuill
                                                    theme="snow"
                                                    value={description}
                                                    onChange={setDescription}
                                                    className="mb-4"
                                                    style={{ height: "180px" }}
                                                />
                        </div>

                        <div className="mt-8">
                            <AccessorisUpload />
                        </div>

                    </div>


                    <div className="w-1/3 pl-4">
                        <div className="mb-4">
                            <ProductUpload
                                images={images}
                                setImages={setImages}
                                audio={audio}
                                setAudio={setAudio}
                            />
                        </div>
                    </div>

                </form>


                <div className="flex justify-end gap-2 mt-4">
                    <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-blue-600 text-white rounded">
                        {isLoading ? (
                            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                            </svg>
                        ) : "Save and Submit"}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AddProductModal;

