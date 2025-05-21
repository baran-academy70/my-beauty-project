// آرایه محصولات
let products = [
    {
        id: 1, // شناسه محصول
        name: "قهوه اسپرسو", // نام محصول
        price: 45000 // قیمت محصول
    },
    {
        id: 2,
        name: "کاپوچینو",
        price: 55000
    }
];

// نمایش محصولات در جدول
function displayProducts(productsArray = products) { // تابع برای نمایش محصولات
    const tableBody = document.querySelector(".table tbody"); // انتخاب بخش بدنه جدول
    tableBody.innerHTML = ''; // پاک کردن محتوای قبلی جدول
    
    productsArray.forEach((product, index) => { // حلقه برای هر محصول
        tableBody.innerHTML += `
            <tr>
                <th scope="row">${index + 1}</th> <!-- شماره ردیف -->
                <td>${product.name}</td> <!-- نام محصول -->
                <td>${product.price.toLocaleString()} تومان</td> <!-- قیمت محصول با فرمت محلی -->
                <td>
                    <button type="button" class="btn btn-outline-success" onclick="openEditModal(${product.id})">
                        ویرایش
                    </button> 
                    <button type="button" class="btn btn-outline-danger" onclick="deleteProduct(${product.id})">
                        حذف
                    </button>
                </td>
            </tr>
        `;
    });
}

// باز کردن مدال برای ویرایش
function openEditModal(id) { // تابع برای باز کردن مدال ویرایش
    const product = products.find(p => p.id === id); // پیدا کردن محصول بر اساس ID
    const form = document.querySelector('#verticalycentered form'); // انتخاب فرم داخل مدال
    
    // پر کردن فرم با اطلاعات محصول
    form.querySelector('#inputNanme4').value = product.name; // نام محصول
    form.querySelector('#inputEmail4').value = product.price; // قیمت محصول
    
    // تنظیم حالت ویرایش
    form.setAttribute('data-edit-id', id); // ذخیره ID محصول در فرم
    
    // تغییر عنوان مدال
    document.querySelector('#verticalycentered .card-title').textContent = 'ویرایش محصول'; // عنوان مدال
    
    // تغییر متن دکمه ثبت
    form.querySelector('button[type="submit"]').textContent = 'ذخیره تغییرات'; // متن دکمه
    
    const modal = new bootstrap.Modal(document.getElementById('verticalycentered')); // ایجاد نمونه مدال
    modal.show(); // نمایش مدال
}

// مدیریت ارسال فرم (افزودن/ویرایش)
function handleFormSubmit(e) { // تابع برای مدیریت ارسال فرم
    e.preventDefault(); // جلوگیری از ارسال پیش‌فرض فرم
    
    const form = e.target; // دریافت فرم ارسال شده
    const name = form.querySelector('#inputNanme4').value; // نام محصول از فرم
    const price = parseInt(form.querySelector('#inputEmail4').value); // قیمت محصول از فرم
    
    const editId = form.getAttribute('data-edit-id'); // دریافت ID محصول برای ویرایش
    
    if (editId) { // اگر در حالت ویرایش هستیم
        // ویرایش محصول موجود
        const productIndex = products.findIndex(p => p.id === parseInt(editId)); // پیدا کردن ایندکس محصول
        products[productIndex] = { // بروزرسانی اطلاعات محصول
            ...products[productIndex],
            name,
            price
        };
    } else {
        // افزودن محصول جدید
        const newProduct = { // ایجاد محصول جدید
            id: products.length + 1, // تعیین شناسه جدید
            name,
            price
        };
        products.push(newProduct); // افزودن محصول جدید به آرایه
    }
    
    // به‌روزرسانی جدول
    displayProducts(); // نمایش مجدد محصولات
    
    // بستن مدال
    const modal = bootstrap.Modal.getInstance(document.getElementById('verticalycentered')); // دریافت نمونه مدال
    modal.hide(); // پنهان کردن مدال
    
    // پاک کردن فرم
    form.reset(); // ریست کردن فرم
    form.removeAttribute('data-edit-id'); // حذف شناسه ویرایش
}

// تابع حذف محصول
function deleteProduct(productId) { // تابع برای حذف محصول
    if (confirm('آیا از حذف این محصول اطمینان دارید؟')) { // تایید حذف
        // پیدا کردن ایندکس محصول با استفاده از ID
        const index = products.findIndex(product => product.id === productId); // پیدا کردن ایندکس
        
        if (index !== -1) { // اگر محصول یافت شد
            // حذف محصول از آرایه با استفاده از splice
            products.splice(index, 1); // حذف محصول
            // بروزرسانی نمایش جدول
            displayProducts(); // نمایش مجدد محصولات
            // نمایش پیام موفقیت
            alert('محصول با موفقیت حذف شد'); // نمایش پیام
        }
    }
}

// جستجوی محصول
function searchProducts(e) { // تابع برای جستجوی محصول
    const searchTerm = e.target.value.toLowerCase(); // دریافت متن جستجو
    const filteredProducts = products.filter(product => // فیلتر کردن محصولات
        product.name.toLowerCase().includes(searchTerm) // بررسی تطابق نام محصول
    );
    displayProducts(filteredProducts); // نمایش محصولات فیلتر شده
}

// اجرای اولیه
document.addEventListener('DOMContentLoaded', () => { // اجرای کد پس از بارگذاری صفحه
    // نمایش محصولات
    displayProducts(); // نمایش محصولات اولیه
    
    // تغییر فرم موجود
    const form = document.querySelector('#verticalycentered form'); // انتخاب فرم
    
    // تغییر لیبل‌ها و placeholder ها
    form.querySelector('label[for="inputNanme4"]').textContent = 'نام محصول'; // تغییر لیبل نام محصول
    form.querySelector('#inputNanme4').placeholder = 'نام محصول را وارد کنید'; // تغییر placeholder
    
    form.querySelector('label[for="inputEmail4"]').textContent = 'قیمت (تومان)'; // تغییر لیبل قیمت
    form.querySelector('#inputEmail4').type = 'number'; // تعیین نوع فیلد قیمت
    form.querySelector('#inputEmail4').placeholder = 'قیمت را وارد کنید'; // تغییر placeholder قیمت
    
    // حذف فیلدهای اضافی
    const unnecessaryFields = form.querySelectorAll('.col-12:nth-child(n+3)'); // انتخاب فیلدهای اضافی
    unnecessaryFields.forEach(field => field.remove()); // حذف فیلدهای اضافی
    
    // اضافه کردن event listener ها
    form.addEventListener('submit', handleFormSubmit); // افزودن event listener به فرم
    
    // اضافه کردن event listener به مدال برای ریست کردن فرم
    const modal = document.getElementById('verticalycentered'); // انتخاب مدال
    modal.addEventListener('show.bs.modal', function() { // افزودن event listener برای نمایش مدال
        const form = this.querySelector('form'); // انتخاب فرم داخل مدال
        if (!form.hasAttribute('data-edit-id')) { // اگر در حالت افزودن هستیم
            form.reset(); // ریست کردن فرم
            this.querySelector('.card-title').textContent = 'افزودن محصول جدید'; // تغییر عنوان مدال
            form.querySelector('button[type="submit"]').textContent = 'افزودن'; // تغییر متن دکمه
        }
    });
    
    // اضافه کردن event listener جستجو
    document.querySelector('.search-form input[name="query"]') // انتخاب فیلد جستجو
        .addEventListener('input', searchProducts); // افزودن event listener برای جستجو
}); 
