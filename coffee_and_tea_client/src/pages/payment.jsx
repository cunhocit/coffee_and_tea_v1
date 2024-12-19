import { Helmet, HelmetProvider } from "react-helmet-async"
import Footer from "../components/footer"
import NavigationBar from "../components/navigation"
import { ListOrder } from "../layouts/payment/list_order"
import { ProductRelated } from "../layouts/product_detail/product_related"
import { useCart } from "../hooks/CartContext";

export const Payment = () => {
    const { cartItems } = useCart();
    return (
        <>
            <HelmetProvider>

                <Helmet> <title>Thanh toán</title> </Helmet>

                <section className="-wrap-navigation">
                    <NavigationBar/>
                </section>

                <div className="wrap-payment-page">

                <ListOrder cartItems={cartItems}/> 

                    <ProductRelated />

                </div>

                <Footer/>

            </HelmetProvider>
        </>
    )
}