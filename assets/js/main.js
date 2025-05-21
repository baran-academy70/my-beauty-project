// تعریف دسته‌بندی‌ها
const categories = [
    {
        id: 'warm', // شناسه دسته‌بندی
        title: 'گرم نوش ها', // عنوان دسته‌بندی
        icon: 'fa-mug-hot', // آیکون دسته‌بندی
        name: 'گرم نوش ها' // نام نمایش داده شده برای دسته‌بندی
    },
    {
        id: 'cool',
        title: 'سرد نوش ها',
        icon: 'fa-martini-glass',
        name: 'سرد نوش ها'
    },
    {
        id: 'ice',
        title: 'بستنی ها',
        icon: 'fa-ice-cream',
        name: 'بستنی ها'
    },
    {
        id: 'sandwich',
        title: 'ساندویچ ها',
        icon: 'fa-burger',
        name: 'ساندویچ ها'
    },
    {
        id: 'cake',
        title: 'کیک ها',
        icon: 'fa-cheese',
        name: 'کیک ها'
    }
];

// تعریف محصولات
const products = [
    // گرم نوش ها
    {
        id: 'product1', // شناسه محصول
        category: 'warm', // دسته‌بندی محصول
        name: 'هات چاکلت', // نام محصول
        price: 77, // قیمت محصول
        image: 'assets/images/warm1.png' // مسیر تصویر محصول
    },
    {
        id: 'product2',
        category: 'warm',
        name: 'وایت چاکلت',
        price: 75,
        image: 'assets/images/warm2.png'
    },
    {
        id: 'product3',
        category: 'warm',
        name: 'کوکی چاکلت',
        price: 95,
        image: 'assets/images/warm3.png'
    },
    // سرد نوش ها
    {
        id: 'product4',
        category: 'cool',
        name: 'آیس کافی',
        price: 77,
        image: 'assets/images/cool1.png'
    },
    {
        id: 'product5',
        category: 'cool',
        name: 'آیس کافیلاته',
        price: 95,
        image: 'assets/images/cool2.png'
    },
    {
        id: 'product6',
        category: 'cool',
        name: 'آیس آمریکانو',
        price: 50,
        image: 'assets/images/cool3.png'
    },
    // بستنی ها
    {
        id: 'product7',
        category: 'ice',
        name: 'رد اسپارو',
        price: 120,
        image: 'assets/images/ice1.png'
    },
    {
        id: 'product8',
        category: 'ice',
        name: 'سویت ناتی',
        price: 140,
        image: 'assets/images/ice2.png'
    },
    {
        id: 'product9',
        category: 'ice',
        name: 'کارامل نسکافه',
        price: 110,
        image: 'assets/images/ice3.png'
    },
    // ساندویچ ها
    {
        id: 'product10',
        category: 'sandwich',
        name: 'ساندویچ پپرونی',
        price: 130,
        image: 'assets/images/sandwich.png'
    },
    {
        id: 'product11',
        category: 'sandwich',
        name: 'ساندویچ لیونر',
        price: 185,
        image: 'assets/images/OIP.jpg'
    },
    {
        id: 'product12',
        category: 'sandwich',
        name: 'ساندویچ مرغ',
        price: 160,
        image: 'assets/images/OIP (1).jpg'
    },
    // کیک ها
    {
        id: 'product13',
        category: 'cake',
        name: 'کیک روز',
        price: 75,
        image: 'assets/images/cake1.png'
        
    }
];

// تابع جستجوی جدید
function searchItems() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase(); // دریافت متن جستجو
    const allItems = document.querySelectorAll('.warm1, .cool1, .ice1, .sandwich1, .cake1'); // انتخاب همه آیتم‌ها
    
    allItems.forEach(item => {
        const nameText = item.querySelector('.name').textContent.toLowerCase(); // دریافت نام محصول
        const priceText = item.querySelector('span').textContent; // دریافت قیمت محصول
        
        // جستجو بر اساس نام یا قیمت
        const matchesName = nameText.includes(searchQuery); // بررسی تطابق با نام
        const matchesPrice = priceText.includes(searchQuery); // بررسی تطابق با قیمت
        
        // نمایش یا عدم نمایش آیتم‌ها بر اساس تطابق
        if (matchesName || matchesPrice) {
            item.parentElement.style.display = 'block'; // نمایش آیتم
        } else {
            item.parentElement.style.display = 'none'; // عدم نمایش آیتم
        }
    });
}

// تابع رندر کردن دسته‌بندی‌ها
function renderCategories() {
    const categoryContainer = document.querySelector('#category .items'); // انتخاب کانتینر دسته‌بندی‌ها
    categoryContainer.innerHTML = categories.map(category => `
        <div class="item1">
            <a href="#${category.id}"> <!-- لینک به دسته‌بندی -->
                <i class="fa-solid ${category.icon}"></i> <!-- آیکون دسته‌بندی -->
                <p>${category.name}</p> <!-- نام دسته‌بندی -->
            </a>
        </div>
    `).join(''); // ایجاد HTML برای همه دسته‌بندی‌ها
}

// تابع رندر کردن محصولات
function renderProducts() {
    categories.forEach(category => {
        const categoryProducts = products.filter(product => product.category === category.id); // فیلتر کردن محصولات بر اساس دسته‌بندی
        const sectionContainer = document.getElementById(category.id); // انتخاب کانتینر مربوط به دسته‌بندی
        if (sectionContainer) {
            const productsHTML = `
                <div class="Maintitle">
                    <h5>${category.title}<hr /></h5> <!-- عنوان دسته‌بندی -->
                </div>
                <div class="${category.id}-items"> <!-- کانتینر محصولات -->
                    ${categoryProducts.map(product => `
                        <div class="col-3"> <!-- ستون برای محصول -->
                            <div class="${category.id}1" id="${product.id}"> <!-- کانتینر محصول -->
                                <img src="${product.image}" alt="${product.name}" /> <!-- تصویر محصول -->
                                <div class="title">
                                    <p class="name">${product.name}</p> <!-- نام محصول -->
                                    <hr />
                                    <p><span>${product.price}</span> هزار تومان</p> <!-- قیمت محصول -->
                                    <button type="button"> <!-- دکمه افزودن به سبد خرید -->
                                        <i class="fa-solid fa-cart-shopping"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            sectionContainer.innerHTML = productsHTML; // قرار دادن HTML در کانتینر
        }
    });
}

// تابع افزودن به سبد خرید
function addToCart(productId) {
    const product = products.find(p => p.id === productId); // پیدا کردن محصول بر اساس شناسه
    if (!product) return; // اگر محصول وجود نداشت، خروج

    let cart = JSON.parse(localStorage.getItem('cart')) || []; // دریافت سبد خرید از localStorage
    const existingProduct = cart.find(item => item.id === productId); // بررسی وجود محصول در سبد خرید
    
    if (existingProduct) {
        existingProduct.quantity++; // افزایش تعداد محصول در سبد خرید
    } else {
        cart.push({
            ...product, // افزودن محصول جدید به سبد خرید
            quantity: 1 // تعداد محصول را 1 قرار دهید
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart)); // ذخیره سبد خرید در localStorage
    alert(`${product.name} به سبد خرید اضافه شد.`); // نمایش پیام افزودن محصول
    renderCart(); // بروزرسانی سبد خرید
}

// تابع حذف کامل محصول از سبد خرید
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // دریافت سبد خرید
    cart = cart.filter(item => item.id !== productId); // فیلتر کردن محصول برای حذف
    localStorage.setItem('cart', JSON.stringify(cart)); // ذخیره سبد خرید در localStorage
    renderCart(); // بروزرسانی سبد خرید
}

// تابع افزایش تعداد محصول در سبد خرید
function increaseQuantity(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // دریافت سبد خرید
    const product = cart.find(item => item.id === productId); // پیدا کردن محصول در سبد خرید
    if (product) {
        product.quantity++; // افزایش تعداد محصول
        localStorage.setItem('cart', JSON.stringify(cart)); // ذخیره سبد خرید در localStorage
        renderCart(); // بروزرسانی سبد خرید
    }
}

// تابع کاهش تعداد محصول در سبد خرید
function decreaseQuantity(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // دریافت سبد خرید
    const product = cart.find(item => item.id === productId); // پیدا کردن محصول در سبد خرید
    if (product) {
        product.quantity--; // کاهش تعداد محصول
        if (product.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId); // حذف محصول اگر تعداد آن به صفر رسید
        }
        localStorage.setItem('cart', JSON.stringify(cart)); // ذخیره سبد خرید در localStorage
        renderCart(); // بروزرسانی سبد خرید
    }
}

// تابع فرمت کردن اعداد با جداکننده سه رقمی
function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // فرمت کردن عدد با کاما
}

// تابع محاسبه مجموع قیمت
function calculateTotal(cart) {
    const total = cart.reduce((total, item) => total + (item.price * item.quantity), 0); // محاسبه مجموع قیمت
    return formatNumber(total); // فرمت کردن مجموع
}

// تابع رندر سبد خرید بروزرسانی شده
function renderCart() {
    const cartContainer = document.getElementById('products'); // انتخاب کانتینر سبد خرید
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // دریافت سبد خرید
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<div class="empty"><i class="fa-solid fa-cart-plus"></i></div>'; // نمایش پیام خالی بودن سبد خرید
        return;
    }
    
    const totalPrice = calculateTotal(cart); // محاسبه مجموع قیمت
    
    cartContainer.innerHTML = `
        ${cart.map(item => `
            <div class="cart-item"> <!-- آیتم سبد خرید -->
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" "/> <!-- تصویر محصول -->
                </div>
                <div class="cart-item-details">
                    <p class="name">${item.name}</p> <!-- نام محصول -->
                    <p class="price"><span>${formatNumber(item.price)}</span> هزار تومان</p> <!-- قیمت محصول -->
                    <div class="quantity-controls"> <!-- کنترل‌های تعداد -->
                        <button onclick="increaseQuantity('${item.id}')" class="quantity-btn"> <!-- دکمه افزایش تعداد -->
                            <i class="fa-solid fa-plus"></i>
                        </button>
                        <span class="quantity">${item.quantity}</span> <!-- نمایش تعداد محصول -->
                        <button onclick="decreaseQuantity('${item.id}')" class="quantity-btn"> <!-- دکمه کاهش تعداد -->
                            <i class="fa-solid fa-minus"></i>
                        </button>
                    </div>
                </div>
                <button onclick="removeFromCart('${item.id}')" class="remove-btn"> <!-- دکمه حذف محصول -->
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `).join('')}
        <div class="cart-total"> <!-- نمایش مجموع سبد خرید -->
            <div class="total-row">
                <span>مجموع:</span>
                <span>${totalPrice} هزار تومان</span> <!-- نمایش مجموع قیمت -->
            </div>
            <button class="checkout-btn">تکمیل خرید</button> <!-- دکمه تکمیل خرید -->
        </div>
    `;
}

// اجرای اولیه
document.addEventListener('DOMContentLoaded', () => {
    renderCategories(); // رندر کردن دسته‌بندی‌ها
    renderProducts(); // رندر کردن محصولات
    renderCart(); // رندر کردن سبد خرید
    
    // حذف event listener های قبلی و اضافه کردن event listener جدید
    document.getElementById("searchInput").addEventListener("input", searchItems); // افزودن event listener برای جستجو
    
    document.querySelectorAll('button[type="button"]').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.closest('[id^="product"]').id; // دریافت شناسه محصول
            addToCart(productId); // افزودن محصول به سبد خرید
        });
    });
});

