// import GalleryView from "./GalleryView";

// export default function GalleryPage() {
//   const images = [
//     {
//       id: "1",
//       title: "Test Image",
//       imageUrl: "https://picsum.photos/600/400?1",
//       category: "Minerals",
//     },
//       {
//       id: "2",
//       title: "Events Image",
//      imageUrl: "https://picsum.photos/600/400?2",
//       category: "Events",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white py-24">
//       <div className="max-w-7xl mx-auto px-4">
//         <GalleryView initialImages={images} />
//       </div>
//     </div>
//   );
// }



import GalleryView from "./GalleryView";

export default function GalleryPage() {
  const images = [
    {
      id: "1",
      imageUrl: "/Gallery1.jpeg",
      category: "Minerals",
    },
    {
      id: "2",
      imageUrl: "/Gallery2.jpeg",
      category: "Events",
    },
    {
      id: "3",
      imageUrl: "/Gallery3.jpeg",
      category: "Infrastructure",
    },
     {
      id: "4",
      imageUrl: "/Gallery4.jpeg",
      category: "Infrastructure",
    },
     {
      id: "5",
      imageUrl: "/Gallery5.jpeg",
      category: "Infrastructure",
    },
     {
      id: "6",
      imageUrl: "/Gallery6.jpeg",
      category: "Infrastructure",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <GalleryView initialImages={images} />
      </div>
    </div>
  );
}