// آرایه کاربران با دو ادمین و دو کاربر عادی
const users = [
    { username: "admin1", password: "admin123", role: 0 }, // ادمین اول
    { username: "admin2", password: "admin456", role: 0 }, // ادمین دوم
    { username: "user1", password: "user123", role: 1 }, // کاربر عادی اول
    { username: "user2", password: "user456", role: 1 }  // کاربر عادی دوم
];

// پردازش فرم لاگین
document.querySelector('.button').addEventListener('click', function() { // افزودن event listener به دکمه لاگین
    
    const username = document.getElementById("username").value; // دریافت نام کاربری از فیلد ورودی
    const password = document.getElementById("password").value; // دریافت رمز عبور از فیلد ورودی
    
    // جستجوی کاربر در آرایه کاربران بر اساس نام کاربری و رمز عبور
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) { // اگر کاربر یافت شد
        // ذخیره اطلاعات کاربر در localStorage
        localStorage.setItem('currentUser', JSON.stringify(user)); // ذخیره کاربر جاری به صورت رشته JSON
        
        if (user.role === 0) { // اگر کاربر ادمین باشد
            window.location.href = '../panelAdmin/panel.html'; // هدایت به صفحه پنل ادمین
        } else {
            window.location.href = '../../index.html'; // هدایت به صفحه اصلی برای کاربر عادی
        }
    } else { // اگر کاربر در سیستم نبود
        // نمایش پیام خطا و هدایت به صفحه ثبت نام
        alert('کاربر یافت نشد. به صفحه ثبت نام هدایت می‌شوید...'); // نمایش پیام خطا
        window.location.href = 'signup.html'; // هدایت به صفحه ثبت نام
    }
});
