import { Card, Image, Text, Button, Group, Grid, ScrollArea } from '@mantine/core';
import classes from '../Miniatur/Miniatur.module.scss'

function MiniaturCard({ data }) {
    return (
        <>
            <ScrollArea
                style={{ height: 'calc(90vh - 200px)' }}
                scrollbarSize={6}
                scrollHideDelay={500}
                scrollbars="y"
            // className={classes['scrollArea']}
            >
                <Grid>
                    {data.map((element) => (
                        <Grid.Col
                            span={{ base: 12, xs: 6, sm: 4, md: 3, lg: 2 }}
                        >
                            <Card shadow="xs" padding="lg" radius="md" withBorder >
                                <Card.Section>
                                    <Image
                                        src={element.pictures[0]}
                                        height={160}
                                        alt={element.nazev}
                                    />
                                </Card.Section>

                                <Group mt="md" mb="xs">
                                    <Text fw={500}>{element.builder}</Text>
                                </Group>
                                <Group className={classes['textContainer']}>
                                    <Text size="sm" c="dimmed">Místo výroby: { element.placeOfManufacture}</Text>
                                    <Text size="sm" c="dimmed">Datace: {element.dating}</Text>
                                    <Text size="sm" c="dimmed">Počet manuálu: {element.manuals} / pedál: {element.pedal}</Text>
                                    <Text size="sm" c="dimmed"></Text>
                                </Group>

                                <Button color="#7b594e" fullWidth mt="md" radius="md" style={{textTransform: 'uppercase'}}>
                                    Detail
                                </Button>
                            </Card>
                        </Grid.Col>
                    ))}
                </Grid>
            </ScrollArea>
        </>
    )
}

export default MiniaturCard