import { Helmet, HelmetProvider } from "react-helmet-async"
import Footer from "../components/footer"
import NavigationBar from "../components/navigation"
import { ListOrder } from "../layouts/payment/list_order"
import { ProductRelated } from "../layouts/product_detail/product_related"


export const Payment = () => {
    return (
        <>
            <HelmetProvider>

                <Helmet> <title>Thanh toán</title> </Helmet>

                <section className="-wrap-navigation">
                    <NavigationBar/>
                </section>

                <div className="wrap-payment-page">

                    <ListOrder />

                    <ProductRelated />

                </div>

                <Footer/>

            </HelmetProvider>
        </>
    )
}