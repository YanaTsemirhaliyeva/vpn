// для динамической вставки путей (для продакшена и локальной версии)

const isProd = process.env.NODE_ENV === 'production';
export const basePath = isProd ? '/intern-ecrz-1-3' : '';
