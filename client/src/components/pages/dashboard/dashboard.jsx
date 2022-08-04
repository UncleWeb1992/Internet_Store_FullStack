import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../coomon/loader";
import Table from "../../ui/table";
import DashBoardPanel from "./dashboardPanel";
import {
  getProductsList,
  getProductsLoadedStatus,
  removedProduct,
} from "../../../store/products";

const DashBoard = () => {
  const dispatch = useDispatch();
  const [editorProduct, setEditorProduct] = useState(null);
  const [prodCategory, setProdCategory] = useState([]);
  const [search, setSearch] = useState("");
  const isLoading = useSelector(getProductsLoadedStatus());
  const productsList = useSelector(getProductsList());

  const tranformData = (data) => {
    return data.map((p) => ({
      _id: p._id,
      name: p.name,
      img: p.img,
      cost: p.cost,
      description: p.description,
      Ingredients: p.Ingredients,
    }));
  };

  const rollProducts =
    !isLoading &&
    productsList.filter(
      (p) =>
        p.description.includes("Ролл") ||
        p.description.includes("Тортилья") ||
        p.description.includes("Филадельфия") ||
        p.description.includes("Суши")
    );

  const editProduct = (product) => {
    setEditorProduct(product);
  };

  const deleteProduct = (id) => {
    dispatch(removedProduct(id));
  };

  const handleSearch = ({ target }) => {
    setSearch(target.value);
    setProdCategory(null);
  };

  if (!isLoading) {
    const onChangeCategori = (value) => {
      if (value !== "Суши-Роллы") {
        const allProducts = tranformData(productsList).filter((prod) =>
          prod.description.toLowerCase().includes(value.toLowerCase())
        );
        setProdCategory(allProducts);
      } else {
        setProdCategory(tranformData(rollProducts));
      }

      setSearch("");
    };

    const filteredProduct = search
      ? tranformData(productsList).filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        )
      : prodCategory?.length
      ? prodCategory
      : tranformData(productsList);

    return (
      <div className="dashboard">
        <DashBoardPanel
          handleSearch={handleSearch}
          editorProduct={editorProduct}
          setEditorProduct={setEditorProduct}
          onChangeCategori={onChangeCategori}
          prodCategory={prodCategory}
          value={search}
        />
        <div className="dashboard__inner">
          <Table
            data={filteredProduct}
            onEdit={editProduct}
            onRemove={deleteProduct}
          />
        </div>
      </div>
    );
  } else return <Loader />;
};

export default DashBoard;
