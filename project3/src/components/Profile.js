import React from "react";
import { Icon } from "react-materialize"

export default () => {
    return (
        <div className="outerBox m10">
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
                            alt=""
                            height="100%"
                        />
                    </div>
                </div>
                <div style={{ marginLeft: 10, flex: 1 }}>Name HERE...</div>
                <div style={{ cursor: "pointer" }}>
                    <Icon>edit</Icon>
                </div>
            </div>
            <div style={{ borderTop: "1px solid lightgray" }}>
                <div style={{ color: "darkblue", fontFamily: "fantasy", marginTop: 10 }}>
                About me:
                </div>
                <div style={{ fontSize: 12 }}>
                    Here personal information in the form of a bio will be displayed
                </div>
            </div>
        </div>
    );
};