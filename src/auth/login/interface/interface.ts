export type IFormLoginValuesProps = {
  username: string;
  password: string;
  remember: boolean;
  afterSubmit?: string;
};

export interface IResThemeConfig {
  themeConfig: {
    logo: {
      fileId?: number;
      imgLink?: string;
      isEnable: boolean;
    };
    hoverColor: string;
    primaryColor: string;
    lighterColor: string;
    darkerColor: string;
  };
}
