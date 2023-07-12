export const evalFontSize = (fontSize: string) => {
  return fontSize == 'xs'
    ? '12px'
    : fontSize == 'sm'
    ? '14px'
    : fontSize == 'base'
    ? '16px'
    : fontSize == 'lg'
    ? '18px'
    : fontSize == 'xl'
    ? '20px'
    : fontSize == '2xl'
    ? '24px'
    : fontSize == '3xl'
    ? '32px'
    : '16px'
}
