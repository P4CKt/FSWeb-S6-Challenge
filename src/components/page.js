import React from "react";
import styled from "styled-components";
import { Pagination,PaginationLink,PaginationItem} from 'reactstrap';

function Page (props){


const{page,setPage}= props;

const ScSbar= styled.div`
display:flex;
justify-content:center;
margin-top:20px;


`

    return(
        <ScSbar>
            <Pagination>
            <PaginationItem>
                <PaginationLink
                first
                href="#"
                />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink
                href="#"
                previous
                />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                1
                </PaginationLink>
            </PaginationItem>

            <PaginationItem>
                <PaginationLink
                href="#"
                next
                />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink
                href="#"
                last
                />
            </PaginationItem>
            </Pagination>

</ScSbar>
    )
}

export default Page;