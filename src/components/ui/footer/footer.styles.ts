interface FooterStyleType {
  [key: string]: React.CSSProperties;
}

export const footerStyles: FooterStyleType = {
  footer: {
    marginTop: "auto",
    padding: "20px 0",
    backgroundColor: "#171718",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  footerWrapper:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '10px',
  }
};

