
export const getItems = (axios, setitemsIn) => {

    axios.get(
        'http://localhost:8080/'
    ).then(
        res => {

            setitemsIn(res.data);

        }
    ).catch(
        err => {

            console.log(err);

        }
    )

}
