import UploadCategoryModel from "../component/UploadCategoryModel"

const CategoryPage = () => {

  const

  return (
    <section>
      <div className="p-2 bg-blue-400 shadow-md flex items-center justify-between">
        <h2 className="font-semibold">Category</h2>
        <button className="text-md border border-x-primary-200 hover:bg-primary-200 px-3 py-1 rounded">Add Category</button>
      </div>

      


      <UploadCategoryModel/>
    </section>
  );
};

export default CategoryPage;
