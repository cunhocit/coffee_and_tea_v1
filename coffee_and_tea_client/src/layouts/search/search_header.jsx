/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { faChevronLeft, faChevronRight, faCoffee, faLeaf, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Select from 'react-select';
import { optionPrice, optionSale } from "../../components/select";
import { useState } from "react";

export const SearchHeader = ({handleOpenFilter}) => {
    return (
        <>
            <section className="wrap-header-search-product">
                <div className="header-search-bar">
                    <FontAwesomeIcon icon={faCoffee} className="-svg-i"/>
                    <div>
                        <p>Tìm kiếm</p>
                        <input type="text" placeholder="Tìm kiếm sản phẩm"/>
                        <FontAwesomeIcon className="-svg-glass" icon={faMagnifyingGlass} />
                    </div>
                    <FontAwesomeIcon icon={faCoffee} className="-svg-i"/>
                </div>
                
                <div className="title-search-for-word">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <p>Tìm kiếm cho từ khóa:</p>
                </div>

                <div className="wrap-search-for-option">
                    <p>Sắp xếp theo</p>

                    <div className="option-search-box"><p>Mới nhất</p></div>

                    <div className="option-search-box"><p>Bán chạy</p></div>

                    <Select
                        className="select-price"
                        options={optionPrice()}
                        placeholder='Giá'
                        isClearable
                    />

                    <Select
                        className="select-price"
                        options={optionSale()}
                        placeholder='Khuyến mãi'
                        isClearable
                    />

                    <div className="-open-filter-btn" onClick={handleOpenFilter}>Bộ lọc</div>

                    <div className="wrap-option-right-search-for-option">
                        <p className="pageCount">1/9</p>
                        <div className="prevPage"><FontAwesomeIcon icon={faChevronLeft} /></div>
                        <div className="nextPage"><FontAwesomeIcon icon={faChevronRight} /></div>
                    </div>
                </div>
            </section>
        </>
    )
}