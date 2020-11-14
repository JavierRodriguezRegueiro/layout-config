import React, {useState} from "react";
import LayoutItemId from "../../../../core/LayoutItem/Domain/LayoutItemId";
import Row from "../../../../core/LayoutItem/Domain/Row"
import Column from "../../../../core/LayoutItem/Domain/Column"
import {TextField, Button} from "@material-ui/core";
import ILayoutItem from "../../../../core/LayoutItem/Domain/ILayoutItem";
import "./LayoutItemCreatorForm.css";
import UserCase from "../../../../core/Shared/Domain/UserCase/UserCase";

const LayoutItemCreatorForm = (props: {layoutItemCreator: UserCase}) => {
    const [info, setInfo] = useState<ILayoutItem>({
        name: '',
        rows: 1,
        columns: 1
    })
    const actionFunction: (e: React.FormEvent) => Promise<any> = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            return await props.layoutItemCreator.run(new LayoutItemId(), info.name, new Row(info.rows), new Column(info.columns))
        } catch (e) {
            console.log(e)
        }
    }

    const setName = (value: any) => {
        setInfo({
            ...info,
            name: value.target.value
        })
    }

    const setRows = (value: any) => {
        setInfo({
            ...info,
            rows: Number(value.target.value)
        })
    }

    const setColumns = (value: any) => {
        setInfo({
            ...info,
            columns: Number(value.target.value)
        })
    }

    return(
        <form className='layoutItemCreatorForm' onSubmit={(e) => {actionFunction(e)}}>
            <TextField required id="filled-basic" label="Name" variant="filled" onChange={setName}/>
            <TextField id="filled-basic" label="Rows" variant="filled" type="number" onChange={setRows}/>
            <TextField id="filled-basic" label="Columns" variant="filled" type="number" onChange={setColumns}/>
            <Button variant="contained" color="primary" type="submit" value="Submit">
                SAVE
            </Button>
        </form>
    );
};

export default LayoutItemCreatorForm;