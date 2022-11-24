export const getCurrentCurrency = () => {
  return {
    symbol: 'Rp',
    code: 'IDR',
  }
}

export const formatCurrency = (value: number) => {
  const { symbol } = getCurrentCurrency()
  return formatRupiah(value.toString(), symbol)
}

function formatRupiah(angka: string, prefix: string) {
  const numberString = angka.replace(/[^,\d]/g, '').toString()
  const split = numberString.split(',')
  const sisa = split[0].length % 3
  let rupiah = split[0].substr(0, sisa)
  const ribuan = split[0].substr(sisa).match(/\d{3}/gi)
  let separator = ''

  if (ribuan) {
    separator = sisa ? '.' : ''
    rupiah += separator + ribuan.join('.')
  }

  rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah
  return prefix === undefined ? rupiah : rupiah ? 'Rp. ' + rupiah : ''
}
