
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import BASE_URL from '../config/api';
import AddAccessories from '../components/AddAccessories';
import AddToCart from '../components/AddToCart';

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [showDescription, setShowDescription] = useState(false);
  const[showOverview,setShowOverview]=useState(false)
  const [relatedProducts,setRelatedProducts]=useState([])
  
  const category1=["Matte Black","Tiger","Silver","Gold"];    
  const category2=["Note 1","Note 2"]
  const category3=["Accessories1","Accessories 2"]

  const handleShowDescription = () => {
    setShowDescription((prev) => !prev);
  };

  const handleShowOverview = () => {
    setShowOverview((prev) => !prev);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${BASE_URL}/product/${id}`);
        const data = await res.json();
        setProduct(data.data);
      } catch (error) {
        console.error('Failed to fetch product', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(()=>{
     const fetchProductByGroupId=async()=>{
     if(product.groupId){
      try{
      const res=fetch(`${BASE_URL}/product/{product.groupId}`)
      const data=await res.json();
      setRelatedProducts(data.data);
      }  
      catch(error){
      console.log("Failed to fetch Related Products");
    }
    }
    }
     fetchProductByGroupId();
  },[product.groupId])

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  if (!product) {
    return <div className="p-8">Product not found.</div>;
  }

  const handleImageClick = (index) => {
    setIsModalOpen(true);
    setSelectedImage(product.images[index]);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  const handleBack = () => {
    navigate(`/${product.category}/${product.subcategory}`);
  };

  const handleColorClick=(color)=>{

  const matched=relatedProducts.find((p)=>p.color === color);
  if(matched){
    setSelectedImage(matched.image[0]);
  }
}

  return (
    <div className="min-h-screen p-8 flex flex-col">
        <button
          className="underline text-[#bb2821] text-left"
          onClick={handleBack}
        >
          ← Back to {product.subcategory}
        </button>

      <div>

        <div className="flex gap-8 justify-evenly mt-4 items-start">

          {/* Images */}
          <div className="w-1/2 grid grid-cols-4 grid-rows-3 gap-2">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={product.name}
                loading="lazy"
                onClick={() => handleImageClick(index)}
                className={`w-full object-cover rounded cursor-pointer ${
                  index === 0
                     ? 'col-span-3 row-span-2 aspect-[4/3]'
      : 'aspect-square'
                }`}
              />
            ))}
          </div>

          {/* Product details */}
          <div className="w-1/2 flex flex-col p-4">

            <h1 className="text-3xl font-bold capitalize text-[#bb2821]">
              {product.name}
            </h1>

            <div className="p-2">
              <h1 className="font-bold text-lg text-[#0B4D81]">
                ${product.price}
              </h1>
            </div>

        <div className='flex flex-col gap-2  shadow-md'>

            <div className="w-full rounded-md">
              <div
              onClick={handleShowDescription}
               className="flex items-center justify-between border p-4 cursor-pointer">
                <h1 className='text-[#0B4D81]'>Product Description</h1>
                <button className=''
                >
                { 
                !showDescription?
                 <FaChevronDown />: <FaChevronUp/>
                } 
                </button>
              </div>

              {showDescription && (
                <div className="p-2">
                  <p
                    className="text-[#606060] tracking-wide leading-relaxed"
                    dangerouslySetInnerHTML={{
                        __html: product.description,
                    }}
                    />
                </div>
              )}
            </div>

            <div className="w-full rounded-md shadow-md">
              <div
              onClick={handleShowOverview}
               className="flex items-center justify-between border p-4 cursor-pointer">
                <h1 className='text-[#0B4D81]'>Product Overview</h1>
                <button
                 
                 >

           { 
                !showOverview?
                 <FaChevronDown />: <FaChevronUp/>
                }

                </button>
              </div>

              {showOverview && (
                  <div className="p-2">
                  <p
                    className="text-[#606060] tracking-wide leading-relaxed"
                    dangerouslySetInnerHTML={{
                        __html: product.overview,
                    }}
                    />
                </div>
              )}
            </div>

         </div>

            <hr className="my-4" />

            {/* Attributes */}
            <div className="flex flex-col w-full gap-3 p-2 text-[#bb2821]">
              <div className="flex w-1/2 justify-between">
                <h1 className="text-[#0B4D81] font-bold text-sm">
                  Color
                </h1>
                <p className="text-sm">Black</p>
              </div>

              <div className="flex w-1/2 justify-between">
                <h1 className="text-[#0B4D81] font-bold text-sm">
                  Size
                </h1>
                <p className="text-sm">{product.size}cm</p>
              </div>

              <div className="flex w-1/2 justify-between">
                <h1 className="text-[#0B4D81] font-bold text-sm">
                  Stock
                </h1>
                <p className="text-sm">
                  {product.stock} units
                </p>
              </div>

              <div className="flex w-1/2 justify-between">
                <h1 className="text-[#0B4D81] font-bold text-sm">
                  Material
                </h1>
                <p className="text-sm">{product.material}</p>
              </div>
            </div>

            <div className="mt-4">
              <AddToCart product={product} />
            </div>


            <div className='mt-4 p-2' >
              <h1 className='font-semibold text-[#bb2821]'>Select Color:</h1>
              <div className='flex gap-4 py-3'>
              {
                category1.map((cat,index)=>(
                  <div className=''>
                     <button 
                     onClick={()=>handleColorClick(cat)}
                     className='border border-[#bb2821] text-[#0B4D81] p-4'>{cat}</button>
                    </div>

                ))
                }
             </div>
            </div>

            <div className='mt-4 p-2' >
              <h1 className='font-semibold text-[#bb2821]'>Select Accessories Bundle:</h1>
              <div className='flex gap-4 py-3'>
              {
                category3.map((cat,index)=>(
                  <div className=''>
                     <button className='border border-[#bb2821] text-[#0B4D81] p-4'>{cat}</button>
                    </div>

                ))
                }
             </div>
            </div>

          </div>
        </div>
      </div>

      <div className="mt-4">
        <AddAccessories />
      </div>

      {/* Image modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full p-4">
            <img
              src={selectedImage}
              alt="Enlarged product"
              className="w-full max-h-[80vh] object-cover rounded-lg"
              loading="lazy"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;

