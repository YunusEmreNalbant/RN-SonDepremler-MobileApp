import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';

export default class About extends Component {
    render() {
        return (
            <Container>
                <Content style={{backgroundColor:'#E8E8E8'}}>
                    <Card >
                        <CardItem header>
                            <Text style={{fontWeight:'bold'}}>KULLANIM ŞARTLARI</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                   Bu yazılım ve bildirim hizmeti, sağlanan bilgilerin doğruluğunu, eksiksizliğini, güvenilirliğini ve kullanışlığı hakkında herhangi bir garanti
                                    vermeksizin "olduğu gibi" sunulmaktadır. {"\n"}
                                </Text>
                                <Text>
                                    Verilerden çıkan sonuçlar veya içeriği temel alınarak yapılan işlemler, kullanıcının sorumluluğundadır.
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card  >
                        <CardItem header>
                            <Text  style={{fontWeight:'bold'}}>VERİ KAYNAKLARI</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                    Bu yazılımın kullandığı API,  {"\n"}
                                    BOĞAZİÇİ ÜNİVERSİTESİ {"\n"}

                                    KANDİLLİ RASATHANESİ VE DEPREM ARAŞTIRMA ENSTİTÜSÜ (KRDAE) {"\n"}

                                    tarafından bize sağlanan bilgiler üzerine yapılmıştır.

                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
