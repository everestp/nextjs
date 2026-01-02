

 export  default function DashBoardMainLayout({feed , stats}){
    return (
        <div  className="display-flex gap-20">
<div className="flex-2">{feed}</div>
<div className="flex-1">{stats}</div>
        </div>
    )
 }