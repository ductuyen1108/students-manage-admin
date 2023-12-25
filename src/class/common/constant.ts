export const defaultValueFilter = {
  className: undefined,
  branchName: undefined,
};

export const HEAD_TABLE_PROPS = [
  { id: 'id', label: 'ID', align: 'center' },
  { id: 'className', label: "Tên lớp", align: 'left' },
  { id: 'branchName', label: "Tên ngành", align: 'center' },
  { id: '', label: "Tùy chọn", align: 'center' },
];

export const optionBranchName = [
  { name: "AU_NHI", id: 'AU_NHI' },
  { name: "CHIEN_NON", id: 'CHIEN_NON' },
  { name: "HIEP_SI", id: 'HIEP_SI' },
  { name: "NGHIA_SI", id: 'NGHIA_SI' },
  { name: "THIEU_NHI", id: 'THIEU_NHI' },
];

export const DEFAULT_VALUE_FORM_CLASS = {
  className: '',
  branchName: {
    id: '',
    name: ''
  },
};