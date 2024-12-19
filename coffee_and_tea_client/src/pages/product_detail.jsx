import { Helmet, HelmetProvider } from "react-helmet-async"
import {useParams} from 'react-router-dom'
import NavigationBar from "../components/navigation"
import Footer from "../components/footer"
import { ProducInfo } from "../layouts/product_detail/product_info"
import { Comment } from "../layouts/product_detail/comment"
import { ProductRelated } from "../layouts/product_detail/product_related"
import { ShoppingCartFinal } from "../components/shopping_cart_final"
import { useProducts } from "../hooks/useProduct";

export const ProductDetail = () => {
    const {id} = useParams();
    const {data, isLoading} = useProducts();
    return (
        <>
            <HelmetProvider>
                <Helmet> <title>Chi tiết sản phẩm</title> </Helmet>

                <section className="-wrap-navigation">
                    <NavigationBar/>
                </section>

                <ShoppingCartFinal/>

                <div className="wrap-product-detail-page">

                    <ProducInfo data={data} isLoading={isLoading} id={id}/>

                    <Comment />

                    <ProductRelated />

                </div>
                
                <Footer/>

            </HelmetProvider>
        </>
    )
}