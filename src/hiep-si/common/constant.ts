export const HEAD_TABLE_PROPS = [
  { id: 'id', label: 'ID', align: 'center' },
  { id: 'holyName', label: 'Tên thánh', align: 'center' },
  { id: 'fullName', label: 'Họ và tên', align: 'center' },
  { id: 'birthday', label: 'Ngày sinh', align: 'center' },
  { id: 'gender', label: 'Giới tính', align: 'center' },
  { id: 'age', label: 'Tuổi', align: 'center' },
  { id: 'className', label: 'Tên lớp', align: 'center' },
  { id: 'status', label: 'Trạng thái', align: 'center' },
  { id: 'action', label: '', align: 'center' },
];

export const defaultValueFilter = {
  name: undefined,
  holyName: undefined,
  classId: undefined,
};

export const statusStudent = [
  { name: 'Hoạt động', id: 'ACTIVE' },
  { name: 'Không hoạt động', id: 'INACTIVE' },
];

export const gender = [
  { name: 'Nam', id: 'MALE' },
  { name: 'Nữ', id: 'FEMALE' },
];

export const familyRole = [
  { name: 'Mẹ', id: 'MOM' },
  { name: 'Bố', id: 'DAD' },
];

export const familyMember = [
  {
    id: 0,
    name: '',
    email: '',
    phoneNumber: '',
    birthDate: '',
    role: '',
    holyName: '',
    lastName: '',
  }
]

export const DEFAULT_VALUE_FORM = {
  holyName: "",
  lastName: "",
  name: "",
  birthDate: "",
  address: "",
  provinceId: {
    name: "",
    slug: "",
    type: "",
    nameWithType: "",
    code: "",
  },
  districtId: {
    name: "",
    slug: "",
    type: "",
    nameWithType: "",
    code: "",
  },
  wardId: {
    name: "",
    slug: "",
    type: "",
    nameWithType: "",
    code: "",
  },
  fatherName: "",
  fatherBirthDate: "",
  fatherEmail: "",
  fatherHolyName: "",
  fatherLastName: "",
  fatherPhoneNumber: "",
  motherName: "",
  motherBirthDate: "",
  motherEmail: "",
  motherHolyName: "",
  motherLastName: "",
  motherPhoneNumber: "",
};
