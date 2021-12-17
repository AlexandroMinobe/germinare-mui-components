import React from 'react'
import { Grid } from '@mui/material'

export interface IGridComponentProp {
  children: any
  container?: boolean
  item?: boolean
  direction?: 	'column-reverse' | 'column' | 'row-reverse' | 'row'
  xs?: 'auto' | number | boolean
  sm?: 'auto' | number | boolean
  md?: 'auto' | number | boolean
  lg?: 'auto' | number | boolean
  xl?: 'auto' | number | boolean
  columns?: number 
  wrap?: 	'nowrap' | 'wrap-reverse' | 'wrap'
}

export default function GridComponent(
  props: IGridComponentProp
) {
  return (
    <Grid
      direction={props.direction}
      item={props.item}
      container={props.container}
      spacing={2}
      xs={props.xs}
      sm={props.sm}
      md={props.md}
      lg={props.lg}
      xl={props.xl}
      wrap={props.wrap}
      columns={props.columns}
    >
      {props.children}
    </Grid>
  )
}
