/* eslint-disable no-unused-vars */
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faChevronRight, faChevronLeft, faTags,faFilter, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import NavigationBar from "../components/navigation";
import Footer from "../components/footer";
import { SearchHeader } from "../layouts/search/search_header";
import { SearchResult } from "../layouts/search/search_result";
import { ShopingCart } from "../components/shopping_cart";
import { useState } from "react";
import { ShoppingCartFinal } from "../components/shopping_cart_final";

export default function Search(){
    const [openFilter, setOpenFilter] = useState(false);
    const handleOpenFilter = () => setOpenFilter(prev => !prev);
    return(
        <HelmetProvider>

            <Helmet> <title>Tìm kiếm sản phẩm</title> </Helmet>

            <div className="wrap-search-page">

                <section className="-wrap-navigation">
                    <NavigationBar/>
                </section>

                <ShoppingCartFinal/>
                
                <SearchHeader handleOpenFilter={handleOpenFilter}/>    

                <SearchResult openFilter={openFilter} handleOpenFilter={handleOpenFilter}/>

                <Footer/>

            </div>

        </HelmetProvider>
    )
}