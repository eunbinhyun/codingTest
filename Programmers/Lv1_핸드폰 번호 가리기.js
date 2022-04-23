function solution(phone_number) {
    const LENGTH = phone_number.length - 4;
    return phone_number.split('').map((ch, i) => i < LENGTH ? '*': ch).join('');
}
