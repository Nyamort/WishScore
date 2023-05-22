import React from "react";
import {FontAwesome} from "@expo/vector-icons";

type TabBarIconProps = {
    name: React.ComponentProps<typeof FontAwesome>['name'],
    color: string,
}

export default function (props: TabBarIconProps) {
    return <FontAwesome size={30} {...props} />;
}