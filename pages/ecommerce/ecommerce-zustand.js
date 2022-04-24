import {
    useLogin,
    useLogout,
    useAddToCart,
    useUser,
    useCartCount,
  } from "../../components/store-zustand";
import styles from '../../styles/Ecommerce.module.css'

const LoginSection = () => {
    const login = useLogin();
    const logout = useLogout();
    
    return (
        <div className={styles.loginButtons}>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
        </div> 
    );
};
 
const UserSection = () => {
    const user = useUser();
    
    return (
        <div className={styles.user}>User: {user}</div>
    );
};

const AddToCartSection = () => {
    const addToCart = useAddToCart();

    return (
        <div className={styles.button}>
            <button onClick={addToCart}>Add To Cart</button>
        </div>
    );
};

const CartCountSection = () => {
    const cartCount = useCartCount(); 

    return (
        <div className={styles.cart}>Cart count: {cartCount}</div>
    );
};

export default function ZustandPage() {
    return (
        <>
            <h1>Zustand</h1>
            <div className={styles.wrapper}>
                <div className={styles.wrapper}>
                    <LoginSection />
                    <UserSection />
                </div>
                    <div className={styles.wrapper}>
                    <AddToCartSection />
                    <CartCountSection />
                </div>
            </div>  
        </>
    );
};