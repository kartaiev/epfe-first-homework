import React from 'react';
import PropTypes from 'prop-types';
import SideMenuContainer from '../../components/SideMenuContainer/SideMenuContainer';
import Copyright from '../../components/Copyright/Copyright';
import './Member.scss';

const Member = props => {
  const { name, instrument } = props;
  return (
    <div className="MemberPage">
      <SideMenuContainer />
      <div className="MemberPage__wrapper">
        <h1 className="MemberPage__title">{name}</h1>
        <h2 className="MemberPage__subtitle">{instrument}</h2>
        <article>
          <p className="MemberPage__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            quaerat, porro dolores impedit accusantium soluta quia placeat illum
            ipsam dolore libero iste sed facere quo voluptates. Accusantium amet
            excepturi incidunt.
          </p>
          <p className="MemberPage__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            numquam architecto eum assumenda soluta, delectus dolorum blanditiis
            repellat mollitia cumque quos quia. Saepe inventore velit natus
            iusto alias officiis accusantium. Alias officia aut, laborum
            aspernatur, corporis consectetur quasi accusantium aliquid
            architecto, quos atque. Accusamus assumenda, similique quisquam
            quasi cum non. Tempore adipisci, repellendus minus aperiam quibusdam
            ratione omnis eos praesentium! Necessitatibus rem aliquam incidunt,
            ex iste a nesciunt quod velit consectetur magnam, ullam aliquid
            omnis? Praesentium voluptates possimus eveniet sint voluptatem rem
            ea, placeat, reprehenderit eligendi deleniti porro aliquam esse.
            Molestias expedita, vel quisquam nesciunt error cupiditate
            perferendis laboriosam mollitia dolores sed at ratione eveniet,
            reiciendis adipisci explicabo iusto ipsam quos quo? Quasi, iste
            exercitationem. Fuga ipsa perspiciatis id excepturi.
          </p>
          <p className="MemberPage__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
            perspiciatis autem. Doloribus hic iste placeat, temporibus quibusdam
            minus suscipit perspiciatis consequuntur inventore eius ullam
            corrupti veniam labore, incidunt praesentium vel? Ab illum maiores
            vero tempore! Perferendis quam necessitatibus odit, harum veniam, at
            officiis dolore aliquam voluptate optio delectus amet dolores,
            repellat aut. Numquam excepturi iste in nesciunt deserunt sed
            dolore?
          </p>
          <p className="MemberPage__description">
            Enim quia itaque, accusamus sequi non tempore? Dolorem qui ullam
            obcaecati neque dicta quidem et modi dolor amet debitis doloribus
            rem esse distinctio voluptates, id voluptatum consequatur quis iste
            deserunt. Exercitationem fugiat iusto vero cum, eaque earum quod
            rerum minus suscipit voluptates consequuntur ratione blanditiis
            quisquam modi. Voluptas, error. Dolor tempore distinctio aspernatur,
            in neque vel dicta eaque laboriosam alias? Dolores aperiam quibusdam
            corporis quidem veniam ad nesciunt minima, ipsam at quam, molestiae
            necessitatibus nam expedita modi vero harum excepturi molestias sed
            ex commodi!
          </p>
        </article>
      </div>
      <div className="MemberPage__copyright-wrapper">
        <Copyright />
      </div>
    </div>
  );
};

Member.propTypes = {
  name: PropTypes.string,
  instrument: PropTypes.string,
};

Member.defaultProps = {
  name: 'Maksym Koval',
  instrument: 'guitar',
};

export default Member;
