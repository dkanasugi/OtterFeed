import React from "react"
import { Dropdown, Icon, Button } from "react-materialize"

export default () => {
    return (
        <div>
            <div className="outerBox m10">
                <div>
                    <div>
                        <div style={{ display: "flex", marginBottom: 10 }}>
                            <div>
                                <div
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 30,
                                    overflow: "hidden"
                                }}
                                >
                                    <img
                                    src=""
                                    alt="something"
                                    height="100%"
                                    />
                                </div>
                            </div>
                            <div style={{ marginLeft: 10, flex: 1 }}>
                                <div
                                style={{
                                    color: "#385898",
                                    fontWeight: 600
                                }}
                                >
                                    Name here...
                                </div>
                                <div style={{ fontSize: 12, color: "gray" }}> Time since post</div>
                            </div>
                            <div>
                                <Dropdown
                                options={{
                                    alignment: "left",
                                    autoTrigger: true,
                                    closeOnClick: true,
                                    constrainWidth: true,
                                    container: null,
                                    coverTrigger: true,
                                    hover: false,
                                    inDuration: 150,
                                    onCloseEnd: null,
                                    onCloseStart: null,
                                    onOpenEnd: null,
                                    onOpenStart: null,
                                    outDuration: 250
                                }}
                                trigger={
                                    <Button flat node="button">
                                        <Icon>more_vert</Icon>
                                    </Button>
                                }
                                >
                                    <a href="" style={{ color: "black" }}>
                                        Edit
                                    </a>
                                    <a href="" style={{ color: "black" }}>
                                        Delete
                                    </a>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div>
                        This will be the text content in the post...
                    </div>
                </div>
            </div>
        </div>
    );
};