
import { withStyles } from '@material-ui/core/styles';
import regularCardStyle from 'assets/jss/material-dashboard-react/regularCardStyle';
import * as cx from 'classnames';
import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

interface Props {
  classes: {
    card: string;
    cardOutline: string;
    cardActions: string;
    cardHeader: string;
    cardPlain: string;
    cardPlainHeader: string;
    cardTitle: string;
    cardIcon: string;
  };
  plainCard?: boolean;
  headerColor?: 'grey' | 'green' | 'red' | 'blue'| 'bluegrey' ;
  cardTitle?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
}

class RegularCard extends React.Component<Props> {
  public static defaultProps: Partial<Props> = {
    headerColor: 'blue',
  };
  public render() {
    const {
      classes,
      headerColor,
      plainCard,
      cardTitle,
      content,
      footer,
    } = this.props;

    const plainCardClasses = cx({
      [` ${classes.cardPlain}`]: plainCard,
    });

    const cardPlainHeaderClasses = cx({
      [` ${classes.cardPlainHeader}`]: plainCard,
    });

    return (
      <div className={classes.cardOutline}>
        <Card className={classes.card + plainCardClasses}>
        <CardHeader
          classes={{
            root:
              `${classes.cardHeader}  ${classes[`${headerColor}CardHeader`]}${cardPlainHeaderClasses}`,
            title: classes.cardTitle,
          }}
          title={cardTitle}
        />
        <CardContent>{content}</CardContent>
        {footer !== undefined ? (
          <CardActions className={classes.cardActions}>{footer}</CardActions>
        ) : null}
      </Card>
      </div>
    );
  }
}

export default withStyles(regularCardStyle)(RegularCard);
