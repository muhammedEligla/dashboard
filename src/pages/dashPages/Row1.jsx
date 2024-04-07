// @ts-nocheck
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { Email , PointOfSale ,PersonAdd, Traffic } from "@mui/icons-material";
import { ResponsivePie } from '@nivo/pie';
import { data, data2, data3 } from "../jsonData/DashChartData"


const arrayPaper = [
    {icon:<Email /> , title:"12,361" , subTitle:"Email Sent" ,data:data , increase:"+14%" , color:"category10"},
    {icon:<PointOfSale /> , title:"432,225" , subTitle:"Sales obtainde" ,data:data2, increase:"+21%" , color:"nivo"},
    {icon:<PersonAdd /> , title:"85,558" , subTitle:"New Clients" ,data:data3 , increase:"+4%" , color:"paired"},
    {icon:<Traffic /> , title:"1,444,338" , subTitle:"Traffic Received" ,data:data, increase:"+56%" , color:"accent"},

]

const handlePaper = ({icon , title , subTitle ,data , increase ,index , color , theme})=>{
    
    return(
        <Paper key={index}  sx={ {minWidth:'420px', display:"flex",p:1 , justifyContent:"space-between", alignItems:"center",flexGrow:1,flex:1}}>
                <Stack gap={1}>
                    <Box sx={{color:theme.palette.secondary.main}}>
                    {icon}
                    </Box>
                    <Typography variant="body2" sx={{fontSize:"13px"}}>
                    {title}
                    </Typography>

                    <Typography variant="body2" sx={{fontSize:"13px"}}>
                    {subTitle}
                    </Typography>
                </Stack>

                <Stack alignItems={'center'}>
                    
                
                <Box sx={{width:'100px' , height:"100px"}}>
                <ResponsivePie
                data={data}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                enableArcLabels={false}
                enableArcLinkLabels={false}
                innerRadius={0.7}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={{ scheme: color }}        
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
               
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}

                theme={
                    {
                        "text": {
                            "fontSize": 11,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        },
                        "axis": {
                            "domain": {
                                "line": {
                                    "stroke":theme.palette.text.secondary,
                                    "strokeWidth": 1
                                }
                            },
                            "legend": {
                                "text": {
                                    "fontSize": 12,
                                    "fill": theme.palette.text.primary,
                                    "outlineWidth": 0,
                                    "outlineColor": "transparent"
                                }
                            },
                            "ticks": {
                                "line": {
                                    "stroke":theme.palette.text.secondary,
                                    "strokeWidth": 1
                                },
                                "text": {
                                    "fontSize": 11,
                                    "fill": theme.palette.text.primary,
                                    "outlineWidth": 0,
                                    "outlineColor": "transparent"
                                }
                            }
                        },
                        "grid": {
                            "line": {
                                "stroke": "#dddddd",
                                "strokeWidth": 1
                            }
                        },
                        "legends": {
                            "title": {
                                "text": {
                                    "fontSize": 11,
                                    "fill": theme.palette.text.primary,
                                    "outlineWidth": 0,
                                    "outlineColor": "transparent"
                                }
                            },
                            "text": {
                                "fontSize": 11,
                                "fill": theme.palette.text.primary,
                                "outlineWidth": 0,
                                "outlineColor": "transparent"
                            },
                            "ticks": {
                                "line": {},
                                "text": {
                                    "fontSize": 10,
                                    "fill": theme.palette.text.primary,
                                    "outlineWidth": 0,
                                    "outlineColor": "transparent"
                                }
                            }
                        },
                        "annotations": {
                            "text": {
                                "fontSize": 13,
                                "fill": theme.palette.text.primary,
                                "outlineWidth": 2,
                                "outlineColor": "#ffffff",
                                "outlineOpacity": 1
                            },
                            "link": {
                                "stroke": "#000000",
                                "strokeWidth": 1,
                                "outlineWidth": 2,
                                "outlineColor": "#ffffff",
                                "outlineOpacity": 1
                            },
                            "outline": {
                                "stroke": "#000000",
                                "strokeWidth": 2,
                                "outlineWidth": 2,
                                "outlineColor": "#ffffff",
                                "outlineOpacity": 1
                            },
                            "symbol": {
                                "fill": "#000000",
                                "outlineWidth": 2,
                                "outlineColor": "#ffffff",
                                "outlineOpacity": 1
                            }
                        },
                        "tooltip": {
                            "container": {
                                "background":  theme.palette.background.default,
                                "fontSize": 12
                            },
                            "basic": {},
                            "chip": {},
                            "table": {},
                            "tableCell": {},
                            "tableCellValue": {}
                        }
                    }
                }
                
               
            />
                </Box>
                    <Typography>{increase}</Typography>
                </Stack>
            </Paper>
    )
}
const Row1 = () => {
    const theme = useTheme()
    return (
        <Stack direction={'row'}  flexWrap={'wrap'}  gap={1} >

        {arrayPaper.map((item, index) =>{
            return(
                handlePaper({icon:item.icon , title:item.title , index, color:item.color ,
                subTitle:item.subtitle , data:item.data , increase:item.increase , theme
            })
            )
        })}
            {}
        </Stack>
    );
}

export default Row1;
