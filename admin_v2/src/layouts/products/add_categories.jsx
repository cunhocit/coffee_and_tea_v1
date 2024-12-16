/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { addCtgAPI, deleteCategoriesAPI } from "../../app/api/categoriesApi";

export function AddCategoriesForm({isOpen, categories, fetchData}) {
  const [newCat, setNewCat] = useState('');
  const [selectCat, setSelectCat] = useState([]);

  const handleAddCat = async () => {
    if (newCat) {
      await addCtgAPI(newCat);
      fetchData();
      setNewCat('');
    }else alert('Tên danh mục trống');
  }

  const categoriesChecked = (id, checked) => {
    setSelectCat(prev => {
      if (checked) {
        const updatedList = [...prev, id];
        return updatedList;
      } else {
        const updatedList = prev.filter(catId => catId !== id);
        return updatedList;
      }
    });
  }

  const handleDeteleCat = () => {
    if (selectCat.length === 0) {
      alert('Chưa chọn danh mục!');
      return;
    }else {
      let mess_ = "Nếu xóa các danh mục này thì các sản phẩm và đơn hàng liên quan hiện có cũng sẽ bị xóa!";
      if (window.confirm(mess_)) {
        deleteCategoriesAPI(selectCat);
        fetchData();
        setSelectCat([]);
      }
    }
  }

  return (
    <>

      <div className="-add-directory-form" style={{display: !isOpen ? 'flex' : 'none'}}>

        <p>Danh mục hiện có</p>

        <div className="-cat-box">
              {categories?.map(c => (
                <div key={c.id} className="-cat-input-item">
                  <input  type="checkbox"
                          value={c.category}
                          onChange={e => categoriesChecked(c.category, e.target.checked)}
                  />
                  <label>{c.category}</label>
                </div>
              ))}
        </div>

        <label htmlFor="" className="value_box">
          <p>Tên danh mục</p>
          <input type="text" value={newCat} onChange={e => setNewCat(e.target.value)}/>
        </label>

        <div className="-add-prd-btn" onClick={handleAddCat}>Thêm danh mục</div>

        <div className="-add-prd-btn" onClick={handleDeteleCat}>Xóa danh mục</div>

      </div>

    </>
  );
}

