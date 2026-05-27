"use client";

import { useState } from "react";
import { Plus, Loader2, Image as ImageIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";

type GalleryImage = {
  id: string;
  title: string | null;
  imageUrl: string;
  category: string | null;
};

export default function GalleryManager({ initialImages }: { initialImages: GalleryImage[] }) {
  const [isCreating, setIsCreating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Minerals");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const router = useRouter();

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) {
      alert("Please select an image file.");
      return;
    }
    
    setIsLoading(true);

    try {
      // 1. Upload Image
      const formData = new FormData();
      formData.append("file", imageFile);
      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const uploadData = await uploadRes.json();
      
      if (!uploadData.url) throw new Error("Upload failed");

      // 2. Save to DB
      const res = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          category,
          imageUrl: uploadData.url,
        }),
      });

      if (res.ok) {
        setIsCreating(false);
        setTitle("");
        setCategory("Minerals");
        setImageFile(null);
        router.refresh();
      } else {
        alert("Failed to save image.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return;
    try {
      await fetch(`/api/gallery?id=${id}`, { method: "DELETE" });
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-6xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Gallery Manager</h1>
        {!isCreating && (
          <button 
            onClick={() => setIsCreating(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Image
          </button>
        )}
      </div>

      {isCreating ? (
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Upload New Image</h2>
            <button onClick={() => setIsCreating(false)} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleCreate} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title (Optional)</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100">
                  <option value="Minerals">Minerals</option>
                  <option value="Spices">Spices</option>
                  <option value="Infrastructure">Infrastructure</option>
                  <option value="Events">Events</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Image File (PC Upload)</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <ImageIcon className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Choose File</span>
                  <input type="file" required accept="image/*" className="hidden" onChange={(e) => setImageFile(e.target.files?.[0] || null)} />
                </label>
                {imageFile && <span className="text-sm text-gray-600 dark:text-gray-400">{imageFile.name}</span>}
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button type="submit" disabled={isLoading} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-70 flex items-center">
                {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                Upload
              </button>
            </div>
          </form>
        </div>
      ) : null}
      
      {initialImages.length === 0 ? (
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-4">No gallery images found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {initialImages.map((img) => (
            <div key={img.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden group relative">
              <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.imageUrl} alt={img.title || "Gallery image"} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-4 flex justify-between items-start">
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100 text-sm truncate">{img.title || "Untitled"}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{img.category}</p>
                </div>
                <button onClick={() => handleDelete(img.id)} className="text-red-600 dark:text-red-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
