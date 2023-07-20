const UploadForm = () => {
  return (
    <div className="text-center mt-10">
      <form className=" flex items-center flex-col gap-8">
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs text-white"
        />
        <button className="btn gap-3 bg-neutral text-white">Upload</button>
      </form>
    </div>
  );
};

export default UploadForm;
