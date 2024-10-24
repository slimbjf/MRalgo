function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} est une année bissextile.`;
    } else {
        return `${year} n'est pas une année bissextile.`;
    }
}

// Exemple d'utilisation
console.log(isLeapYear(2024));  // 2024 est une année bissextile.
console.log(isLeapYear(1900));  // 1900 n'est pas une année bissextile.
function getTicketPrice(age) {
    if (age <= 12) {
        return "Le prix du billet est de 10 $.";
    } else if (age >= 13 && age <= 17) {
        return "Le prix du billet est de 15 $.";
    } else {
        return "Le prix du billet est de 20 $.";
    }
}

// Exemple d'utilisation
console.log(getTicketPrice(10));  // Le prix du billet est de 10 $.
console.log(getTicketPrice(15));  // Le prix du billet est de 15 $.
console.log(getTicketPrice(25));  // Le prix du billet est de 20 $.
function fibonacci(n) {
    if (n === 0) {
        return 0;  // Cas de base
    } else if (n === 1) {
        return 1;  // Cas de base
    }
    return fibonacci(n - 1) + fibonacci(n - 2);  // Récursion
}

// Exemple d'utilisation
console.log(fibonacci(6));  // Renverra 8
function isPalindrome(str) {
    // Nettoyage de la chaîne (suppression des espaces, ponctuation et mise en minuscules)
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Fonction récursive
    function checkPalindrome(s, left, right) {
        if (left >= right) {
            return true;  // Cas de base : si les indices se croisent
        }
        if (s[left] !== s[right]) {
            return false;  // Si les caractères ne correspondent pas
        }
        return checkPalindrome(s, left + 1, right - 1);  // Récursion
    }

    return checkPalindrome(str, 0, str.length - 1);
}

// Exemple d'utilisation
console.log(isPalindrome("A man, a plan, a canal: Panama"));  // Renverra true
console.log(isPalindrome("Hello"));  // Renverra false
