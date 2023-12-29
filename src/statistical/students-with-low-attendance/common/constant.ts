export const optionsBranchName = [
  { id: 1, name: "AU_NHI" },
  { id: 2, name: "CHIEN_NON" },
  { id: 3, name: "HIEP_SI" },
  { id: 4, name: "NGHIA_SI" },
  { id: 5, name: "THIEU_NHI" },
]

export const defaultValueFilter = {
  startDate: "",
  endDate: "",
  branch: undefined,
}

export const HEAD_TABLE_PROPS = [
  { id: 'id', label: 'ID', align: 'center' },
  { id: 'fullName', label: 'Họ và tên', align: 'center' },
  { id: 'birthday', label: 'Ngày sinh', align: 'center' },
  { id: 'gender', label: 'Giới tính', align: 'center' },
  { id: 'branchName', label: 'Tên ngành', align: 'center' },
  { id: 'attendancePercentage', label: 'Tỉ lệ đi học', align: 'center' },
];