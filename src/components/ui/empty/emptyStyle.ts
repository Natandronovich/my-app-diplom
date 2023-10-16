interface EmptyStyleType {
    [key: string] : React.CSSProperties;
};

export const emptyStyle: EmptyStyleType = {
    emptyContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px',
    },
    emptyText:{
        // color: '#171718',
        fontSize: '30px',
    },
}

