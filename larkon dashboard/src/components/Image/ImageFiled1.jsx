import React, { useRef, useState } from "react";

const ImageFiled1 = () => {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview({
      id: `${file.name}-${Date.now()}`,
      name: file.name,
      url: URL.createObjectURL(file),
    });

    e.target.value = ""; // reset to allow re-selection of same file
  };

  const handleDelete = () => {
    setPreview(null);
  };

  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <form className="dropzone" encType="multipart/form-data">
        {/* Hidden file input */}
        <input
          type="file"
          accept="image/png, image/jpeg, image/gif"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />

        {/* Upload Area (only if no preview) */}
        {!preview && (
          <div
            className="dz-message needsclick"
            onClick={triggerFileSelect}
            style={{
              margin: 0,
              padding: 0,
              height: "170px",
            }}
          >
            <i className="bx bx-cloud-upload fs-48 text-primary"></i>
            <h3>
              Drop your image here, or{" "}
              <span className="text-primary">click to browse</span>
            </h3>
            <span className="text-muted fs-13">
              1600 x 1200 (4:3) recommended. PNG, JPG and GIF allowed.
            </span>
          </div>
        )}

        {/* Single image preview (no extra margin/padding) */}
        {preview && (
          <div
            id="file-previews"
            style={{
              margin: 0,
              padding: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="mb-4"
              style={{
                width: "132px",
                height: "132px",
              }}
            >
              <div
                className="border rounded p-1 position-relative"
                style={{ margin: 0 }}
              >
                <img
                  src={preview.url}
                  alt={preview.name}
                  className="img-fluid d-block mx-auto"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    borderRadius: "5px",
                  }}
                />
                <button
                  type="button"
                  onClick={handleDelete}
                  className="position-absolute"
                  style={{
                    top: "45%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "30px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#5d71869b",
                    color: "#fff",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 0,
                    cursor: "pointer",
                  }}
                  title="Remove image"
                >
                  &times;
                </button>
                <p className="mt-2 mb-0 text-center small">{preview.name}</p>
              </div>
            </div>
          </div>
        )}
      </form>
    </>
  );
};

export default ImageFiled1;
