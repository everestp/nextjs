import Link from "next/link";


 export  default function DashBoardMainLayout({feed , stats ,tab1 , tab2}){
    return (
        <div  className="display-flex gap-20">
            <nav>
                <Link href={"/dashboard-main/tab1"} className="mb-10">
                Tab1
                </Link>
                 <Link href={"/dashboard-main/tab2"} className="mb-10">
                Tab2
                </Link>
            </nav>
<div className="flex-2">{feed}</div>
<div className="flex-1">{stats}</div>
<div className="flex-2">{tab1}</div>
<div className="flex-1">{tab2}</div>
        </div>
    )
 }