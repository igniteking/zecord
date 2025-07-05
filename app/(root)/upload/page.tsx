"use client";
import FileInput from "@/components/FileInput";
import FormFeild from "@/components/FormFeild";
import { MAX_THUMBNAIL_SIZE, MAX_VIDEO_SIZE } from "@/constants";
import { useFileInput } from "@/lib/hooks/useFileInput";
import { title } from "process";
import React, { ChangeEvent, FormEvent, useState } from "react";

const page = () => {
  const [isSubmitting, setisSubmitting] = useState(false);
  const [formData, setformData] = useState({
    title: "",
    description: "",
    visibility: "public",
    file: null, // Assuming file is an object
    thumbnail: null, // Assuming thumbnail is an object
    tags: [],
  });
  const [error, setError] = useState<String | null>(null);
  const video = useFileInput(MAX_VIDEO_SIZE);
  const thumbnail = useFileInput(MAX_THUMBNAIL_SIZE);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setisSubmitting(true);

    try {
      if (!formData.title || !formData.description) {
        setError("Please fill in all the details");
        return;
      }

      if (!video.file || !thumbnail.file) {
        setError("Please upload video and thumbnail");
        return;
      }
      
    } catch (error) {
      console.log("Error Submitting the form: ", error);
    } finally {
      setisSubmitting(false);
    }
  };
  return (
    <div className="wrapper-md upload-page">
      <h1>Upload a video</h1>

      {error && <div className="error-field"> {error} </div>}
      <form
        action=""
        onSubmit={handleSubmit}
        className="rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5"
      >
        <FormFeild
          id="title"
          label="Title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter clear and consise video title"
        />
        <FormFeild
          id="description"
          label="Description"
          value={formData.description}
          onChange={handleInputChange}
          as="textarea"
          placeholder="Describe what this video is about"
        />
        <FileInput
          id="video"
          label="Video"
          accept="video/*"
          file={video.file}
          previewUrl={video.previewUrl}
          inputRef={video.inputRef}
          onChange={video.handleFileChange}
          onReset={video.resetFile}
          type="video"
        />
        <FileInput
          id="thumbnail"
          label="Thumbnail"
          accept="images/*"
          file={thumbnail.file}
          previewUrl={thumbnail.previewUrl}
          inputRef={thumbnail.inputRef}
          onChange={thumbnail.handleFileChange}
          onReset={thumbnail.resetFile}
          type="image"
        />

        <FormFeild
          id="visibility"
          label="Visibility"
          value={formData.visibility}
          onChange={handleInputChange}
          as="select"
          options={[
            { value: "public", label: "Public" },
            { value: "unlisted", label: "Unlisted" },
            { value: "private", label: "Private" },
          ]}
        />
        <button type="submit" disabled={isSubmitting} className="submit-button">
          {isSubmitting ? "Uploading..." : "Upload Video"}
        </button>
      </form>
    </div>
  );
};

export default page;
